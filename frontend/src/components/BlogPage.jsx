import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Container, TextField, Card, CardContent, Box } from "@mui/material";

export default function BlogApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem('jwt'); // JWT set by AppBar login
      const user = localStorage.getItem('currentUser'); // currentUser set by AppBar
      setIsLoggedIn(!!token && !!user);
    };

    window.addEventListener('authChanged', checkLogin); // event triggered by AppBar on login/logout
    checkLogin(); // initial check on mount

    return () => window.removeEventListener('authChanged', checkLogin);
  }, []);

  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("blog_posts");
    if (savedPosts) setPosts(JSON.parse(savedPosts));
  }, []);

  const handleAddPost = () => {
    if (!newPost.trim()) return;

    let userObj;
    try {
      userObj = JSON.parse(localStorage.getItem('currentUser'));
    } catch {
      userObj = null;
    }
    const currentUser = userObj?.username || 'Unbekannt';

    const updatedPosts = [...posts, { text: newPost, date: new Date().toLocaleString(), author: currentUser }];
    setPosts(updatedPosts);
    localStorage.setItem("blog_posts", JSON.stringify(updatedPosts));
    setNewPost("");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Blogseite
          </Typography>
          {/* kein Login auf dieser Seite */}
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {isLoggedIn && (
          <Box sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
            <Typography variant="h6">Neuen Blogeintrag schreiben</Typography>
            <TextField
              fullWidth
              multiline
              minRows={3}
              margin="normal"
              label="Neuer Eintrag"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              sx={{ backgroundColor: "white" }}
            />
            <Button variant="contained" onClick={handleAddPost}>Veröffentlichen</Button>
          </Box>
        )}

        <Typography variant="h5" sx={{ mb: 2 }}>Blog-Einträge</Typography>
        {posts.length === 0 ? (
          <Typography>Keine Beiträge vorhanden.</Typography>
        ) : (
          posts.map((p, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="body1">{p.text}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {p.date} - {p.author}
                </Typography>
                {isLoggedIn && (() => {
                  let userObj;
                  try {
                    userObj = JSON.parse(localStorage.getItem('currentUser'));
                  } catch {
                    userObj = null;
                  }
                  const currentUser = userObj?.username || '';
                  return currentUser === p.author;
                })() && (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={() => {
                      const updatedPosts = posts.filter((_, i) => i !== index);
                      setPosts(updatedPosts);
                      localStorage.setItem("blog_posts", JSON.stringify(updatedPosts));
                    }}
                  >
                    Löschen
                  </Button>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </Container>
    </>
  );
}
