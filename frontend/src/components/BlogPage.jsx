import React, { useState } from 'react';
import ExampleCard from './ExampleCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BlogPage = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // leer ignorieren

    const newComment = {
      id: Date.now(),
      name: name.trim() || 'Anonym',
      text: text.trim(),
      date: new Date().toLocaleString('de-DE'),
    };

    setComments([newComment, ...comments]);
    setText('');
    setName('');
  };

  return (
    <main className="App-main">
      <section className="content-section">
        <div className="content-wrapper">
          <ExampleCard title="📝 Blog & Kommentare">
            <p>
              Hier können wir Feedback, Fragen oder Gedanken zu unserer
              Strapi-&amp;-React-Präsentation sammeln.
            </p>
          </ExampleCard>

          <ExampleCard title="💬 Kommentar schreiben">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name (optional)"
                variant="standard"
                fullWidth
                margin="dense"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Dein Kommentar"
                variant="standard"
                fullWidth
                margin="dense"
                multiline
                minRows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div style={{ marginTop: 16, textAlign: 'right' }}>
                <Button type="submit" variant="contained">
                  Absenden
                </Button>
              </div>
            </form>
          </ExampleCard>

          {comments.length > 0 && (
            <ExampleCard title="📚 Kommentare">
              {comments.map((c) => (
                <div key={c.id} style={{ marginBottom: 16 }}>
                  <strong>{c.name}</strong>{' '}
                  <span style={{ color: '#6b7280', fontSize: 12 }}>
                    ({c.date})
                  </span>
                  <p style={{ marginTop: 4 }}>{c.text}</p>
                </div>
              ))}
            </ExampleCard>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
