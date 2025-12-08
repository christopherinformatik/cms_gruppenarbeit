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
            Diese Seite ersetzt unsere PowerPoint-Präsentation
            zu <strong>Strapi &amp; React</strong>.
          </p>
          <p>
            Wenn wir die Inhalte im CMS ändern, aktualisiert sich
            die Präsentation automatisch.
          </p>
        </ExampleCard>

        {/* hier könnt ihr später weitere Sections einfügen
            (z.B. Strapi, React, Synergie, Installation, Team, …) */}
      </section>
    </main>
  );
};

export default Home;
