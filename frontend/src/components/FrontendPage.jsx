import React from 'react';
import ExampleCard from './ExampleCard';

const FrontendPage = () => {
  return (
    <main className="App-main">
      <section className="content-section">

        {/* ✅ NEUER WRAPPER */}
        <div className="content-wrapper">

          <ExampleCard title="💻 Was ist das Frontend?">
            <p>
              Das Frontend ist alles, was der Benutzer sieht und womit er direkt
              interagiert. Es ist die Benutzeroberfläche (UI) und die Art und Weise,
              wie Daten präsentiert werden.
            </p>

            <p>
              <strong>Analogie:</strong> Das Frontend ist wie der <em>Gastraum eines
              Restaurants</em>: Die Einrichtung, die Menükarte und der Service
              bestimmen, wie wohl sich der Gast fühlt.
            </p>
          </ExampleCard>

          <ExampleCard title="🍽️ Analogie: Der Gastraum">
            <ul>
              <li><strong>Tisch &amp; Stühle:</strong> Layout und Design</li>
              <li><strong>Speisekarte:</strong> Texte, Bilder und Videos</li>
              <li><strong>Kellner:</strong> Reaktion auf Benutzeraktionen</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="🛠️ Funktion des Frontends">
            <p>
              Hauptaufgabe des Frontends ist <strong>Anzeige und Interaktion</strong>.
            </p>
            <ul>
              <li>visuell ansprechend</li>
              <li>schnell reagierend</li>
              <li>intuitiv bedienbar</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="⚙️ Technologien im Frontend">
            <p>Die drei Grundpfeiler:</p>

            <ul>
              <li><strong>HTML</strong> – Struktur</li>
              <li><strong>CSS</strong> – Design</li>
              <li><strong>JavaScript</strong> – Dynamik</li>
            </ul>
          </ExampleCard>

          <ExampleCard title="🚀 Moderne Frameworks">
            <p>Frameworks für effiziente Entwicklung:</p>
            <ul>
              <li><strong>React</strong></li>
              <li><strong>Angular</strong></li>
              <li><strong>Vue.js</strong></li>
            </ul>
          </ExampleCard>

        </div>  {/* ✅ ENDE WRAPPER */}

      </section>
    </main>
  );
};

export default FrontendPage;
