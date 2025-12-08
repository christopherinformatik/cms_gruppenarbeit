import React from 'react';
import ExampleCard from './ExampleCard';

const Home = () => {
  return (
    <main className="App-main" style={{padding:16}}>
      <ExampleCard title="Willkommen">
        <p>Bearbeite Komponenten in <code>frontend/src/components</code>.</p>
        <p>Beispiel: Erstelle neue Komponenten und importiere sie in <code>App.js</code>.</p>
      </ExampleCard>
    </main>
  );
};

export default Home;
