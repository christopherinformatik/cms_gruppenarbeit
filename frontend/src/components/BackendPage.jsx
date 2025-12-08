import React from 'react';
import ExampleCard from './ExampleCard';

const BackendPage = () => {
  return (
    <main className="App-main">
      <section className="content-section">

        {/* Gemeinsamer Breiten-Wrapper */}
        <div className="content-wrapper">

          <ExampleCard title="⚙️ Was ist Backend?">
            <p>
              Das Backend ist alles, was hinter den Kulissen passiert und für den Benutzer
              unsichtbar ist. Es bildet die zentrale Logik einer Anwendung und ist der Ort,
              an dem Daten gespeichert und verarbeitet werden.
            </p>

            <p>
              <strong>Analogie:</strong> Das Backend ist wie die <em>Küche und das Lager
              eines Restaurants</em>: Hier werden die Zutaten gelagert, verarbeitet und
              vorbereitet, bevor das fertige Gericht an den Gast geliefert wird.
            </p>
          </ExampleCard>

          <ExampleCard title="🔪 Analogie: Küche & Lager">

            <ul>
              <li>
                <strong>Das Lagerhaus (Strapi):</strong> Die Datenbank, in der alle Informationen
                gespeichert werden – z. B. Texte, Benutzerkonten oder Bestellungen.
              </li>

              <li>
                <strong>Die Küche (Server-Logik):</strong> Hier werden Anfragen verarbeitet,
                Daten geprüft und Regeln angewendet.
              </li>

              <li>
                <strong>Der Koch:</strong> Der Server nimmt Anfragen entgegen, verarbeitet sie
                und schickt die fertige Antwort („das Gericht“) an das Frontend zurück.
              </li>

            </ul>

          </ExampleCard>

          <ExampleCard title="🛠️ Aufgaben des Backends">
            <p>
              <strong>Hauptfunktion:</strong> Speicherung, Verarbeitung, Sicherheit und Logik.
              Das Backend:
            </p>

            <ul>
              <li>verwaltet Benutzer und Rechte</li>
              <li>verarbeitet Formulare und API-Anfragen</li>
              <li>führt Berechnungen aus</li>
              <li>liefert die richtigen Daten an das Frontend</li>
              <li>sorgt für Sicherheit und Zugriffskontrolle</li>
            </ul>

          </ExampleCard>

          <ExampleCard title="⚙️ Technologien im Backend">

            <p>
              Backend-Sprachen und Frameworks laufen auf dem Server und kümmern sich um
              Logik und Datenverarbeitung.
            </p>

            <ul>
              <li><strong>Node.js (JavaScript)</strong></li>
              <li><strong>Python</strong></li>
              <li><strong>PHP</strong></li>
              <li><strong>Java</strong></li>
              <li><strong>Ruby</strong></li>
            </ul>

          </ExampleCard>

          <ExampleCard title="🗄️ Datenbanken">

            <p>
              Daten werden in Datenbank-Systemen gespeichert:
            </p>

            <ul>
              <li><strong>MySQL</strong></li>
              <li><strong>PostgreSQL</strong></li>
              <li><strong>MongoDB</strong></li>
            </ul>

          </ExampleCard>

          <ExampleCard title="🖥️ Der Server">

            <p>
              Der Server ist die physische oder virtuelle Maschine, auf der der Backend-Code
              ausgeführt wird. Er stellt Anwendungen und APIs bereit und verarbeitet Anfragen.
            </p>

            <p>
              Typische Webserver sind:
            </p>

            <ul>
              <li><strong>Apache</strong></li>
              <li><strong>Nginx</strong></li>
            </ul>

          </ExampleCard>

        </div>

      </section>
    </main>
  );
};

export default BackendPage;
