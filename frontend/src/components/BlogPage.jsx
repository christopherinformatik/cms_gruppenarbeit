import React, { useState, useEffect } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, Container, TextField, Card, CardContent, Box } from "@mui/material";

export default function BlogPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);

  // URL der Strapi-Instanz
  const STRAPI_URL = "http://localhost:1337/api/blogs";

  // 1. Check Login Status
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("jwt");
      let userObj;
      try {
        userObj = JSON.parse(localStorage.getItem("currentUser"));
      } catch {
        userObj = null;
      }
      
      setCurrentUser(userObj);
      setIsLoggedIn(!!token && !!userObj);
      console.log("Login-Status geprüft:", !!token && !!userObj, "Benutzer:", userObj?.username);
    };

    window.addEventListener("authChanged", checkLogin);
    checkLogin();
    return () => window.removeEventListener("authChanged", checkLogin);
  }, []);

  // 2. Fetch all blog posts from Strapi
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Starte Datenabruf...");
        
        // Fügen Sie populate=* hinzu, um alle relationalen Daten abzurufen.
        const res = await axios.get(`${STRAPI_URL}?populate=*`);
        
        console.log("Antwort von Strapi (GET):", res.data); 

        // KORRIGIERTES MAPPING: Geht direkt auf d.titel, da 'attributes' in der Antwort fehlte
        const postsData = res.data.data.map(d => {
            // d.attributes.titel verursachte den Fehler, also gehen wir direkt auf d.titel
            return {
                id: d.id,
                titel: d.titel,
                text: d.content, 
                author: d.author,
                published: d.published, 
            };
        });
        
        setPosts(postsData);
      } catch (err) {
        console.error("Fehler beim Laden der Posts:", err);
        if (err.response) {
            console.error("Server-Antwort-Details:", err.response.data);
            alert(`Fehler beim Laden der Posts: Code ${err.response.status}. Bitte prüfen Sie die Berechtigungen der Rolle 'Public' in Strapi (find).`);
        }
      }
    };
    fetchPosts();
  }, [STRAPI_URL]);


  // 3. Add New Post
  const handleAddPost = async () => {
    if (!newPost.trim()) return;
    const authorName = currentUser?.username || "Unbekannt";
    const token = localStorage.getItem("jwt");

    if (!token) {
        alert("Du musst eingeloggt sein, um einen Beitrag zu erstellen.");
        return;
    }

    try {
      const payload = {
          data: {
              titel: newPost,
              content: newPost,
              author: authorName,
              published: new Date().toISOString(), 
              publishedAt: new Date(), 
          }
      };

      console.log("Sende Payload (POST):", payload);

      const res = await axios.post(
        STRAPI_URL,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      console.log("Erfolg! Strapi Antwort (POST):", res.data);

      const createdData = res.data.data;

      // KORRIGIERTES MAPPING: Geht direkt auf createdData.titel, da 'attributes' in der Antwort fehlte
      const newPostObj = {
        id: createdData.id,
        titel: createdData.titel,
        text: createdData.content, 
        author: createdData.author,
        published: createdData.published
      };

      setPosts([...posts, newPostObj]);
      setNewPost("");
      
    } catch (err) {
      console.error("Fehler beim Erstellen des Beitrags:", err);
       if (err.response) {
            console.error("Server-Antwort-Details:", err.response.data);
            alert(`Fehler beim Erstellen: Code ${err.response.status}. ${err.response.data.error.message}. Bitte prüfen Sie die Berechtigungen der Rolle 'Authenticated' in Strapi (create).`);
        } else {
             alert("Netzwerkfehler: Ist Strapi gestartet und unter http://localhost:1337 erreichbar?");
        }
    }
  };

  // 4. Delete Post (Unverändert, verwendet das korrekte API-Format)
  const handleDeletePost = async (id, author) => {
    if (!currentUser) return;
    const isAdmin = currentUser?.role?.name === "Administrator";
    
    if (currentUser.username !== author && !isAdmin) {
        alert("Du hast keine Berechtigung, diesen Beitrag zu löschen.");
        return;
    }

    try {
      await axios.delete(`${STRAPI_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      });
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
       if (err.response) {
            alert(`Fehler beim Löschen: Code ${err.response.status}. Prüfe Strapi Authenticated Role Berechtigungen (delete).`);
        }
    }
  };


  // 5. Render
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* KORRIGIERT: component="div" verhindert das <a> in <a> Problem in der App-Struktur */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
            Blogseite
          </Typography>
          <Typography variant="subtitle1" sx={{ mr: 2 }}>
            {currentUser ? `Eingeloggt als: ${currentUser.username}` : "Nicht eingeloggt"}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {isLoggedIn ? (
          <Box sx={{ maxWidth: 600, mx: "auto", mb: 4, p: 2, border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
            <Typography variant="h6" gutterBottom>Neuen Blogeintrag schreiben</Typography>
            <TextField
              fullWidth
              multiline
              minRows={3}
              margin="normal"
              label="Titel und Inhalt"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              sx={{ backgroundColor: "white" }}
            />
            <Button variant="contained" onClick={handleAddPost} disabled={!newPost.trim()} sx={{ mt: 1 }}>
              Veröffentlichen
            </Button>
          </Box>
        ) : (
          <Box sx={{ maxWidth: 600, mx: "auto", mb: 4, p: 2, border: "1px dashed #f00", borderRadius: "8px", backgroundColor: "#ffeeee" }}>
              <Typography color="error">Du musst eingeloggt sein, um einen Beitrag zu schreiben.</Typography>
          </Box>
        )}

        <Typography variant="h5" sx={{ mb: 2 }}>
          Blog-Einträge
        </Typography>
        {posts.length === 0 ? (
          <Typography>Keine Beiträge vorhanden (oder Ladefehler aufgetreten).</Typography>
        ) : (
          posts.map((p) => (
            <Card key={p.id} sx={{ mb: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{p.titel}</Typography>
                <Typography variant="body1" paragraph>{p.text}</Typography>
                <Typography variant="caption" color="text.secondary" component="div">
                  Veröffentlicht: {new Date(p.published).toLocaleDateString()} um {new Date(p.published).toLocaleTimeString()}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                   Autor: {p.author}
                </Typography>
                {isLoggedIn &&
                  (currentUser?.username === p.author ||
                    currentUser?.role?.name === "Administrator") && (
                    <Box sx={{ mt: 1 }}>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDeletePost(p.id, p.author)}
                      >
                        Löschen
                      </Button>
                    </Box>
                  )}
              </CardContent>
            </Card>
          ))
        )}
      </Container>
    </>
  );
}