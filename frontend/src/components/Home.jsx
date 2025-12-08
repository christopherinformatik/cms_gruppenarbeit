import React from 'react';
import ExampleCard from './ExampleCard';
import Hero from './Hero';

const Home = () => {
  return (
    <main className="App-main">
      {/* Vollbild-Hero-Bereich */}
      <Hero />

      {/* Inhalt, der beim Scrollen kommt */}
      <section className="content-section" id="home">
        <ExampleCard title="Willkommen">
          <p>
            Diese Seite ist noch in Arbeit.
            Neue Inhalte folgen bald!
          </p>
        </ExampleCard>
      </section>
    </main>
  );
};

export default Home;
