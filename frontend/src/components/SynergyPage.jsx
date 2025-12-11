import React from "react";
import ExampleCard from "./ExampleCard";

const cardStyle = {
  width: 360,
  padding: 24,
  borderRadius: 16,
  border: "1px solid #e5e7eb",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  background: "#ffffff",
  textAlign: "left",
};

const SynergyPage = () => {
  return (
    <main className="App-main">
      <section className="content-section">
        <div className="content-wrapper">
          {/* ───────────────────────────────
              1. Wie es funktioniert
          ─────────────────────────────── */}
          <ExampleCard title="Die Synergie: Wie es funktioniert">
            <ul style={{ paddingLeft: 20, lineHeight: "1.6" }}>
              <li>
                <strong>🔄 Trennung der Aufgaben:</strong>{" "}
                Strapi verwaltet die Daten, React zeigt sie an.
              </li>
              <li>
                <strong>🚚 Die API als Brücke:</strong>{" "}
                Strapi liefert die Daten (als JSON) über eine Schnittstelle (API).
              </li>
              <li>
                <strong>⚙️ Verarbeitung:</strong>{" "}
                React empfängt die Daten und baut daraus die fertige Seite.
              </li>
              <li>
                <strong>♾️ Freiheit:</strong>{" "}
                Ändere das Design in React, ohne die Inhalte in Strapi anfassen zu müssen.
              </li>
            </ul>
          </ExampleCard>

          {/* ───────────────────────────────
              2. Datenfluss
          ─────────────────────────────── */}
          <div style={{ height: 24 }} />
          <ExampleCard title="Wie sieht der Datenfluss aus?">
            <ol style={{ paddingLeft: 20, lineHeight: "1.6" }}>
              <li>
                Inhalte werden in <strong>Strapi</strong> gepflegt
                (z.&nbsp;B. Texte, Bilder, Team-Mitglieder).
              </li>
              <li>
                Ein Nutzer öffnet die Website oder App – das Frontend läuft in{" "}
                <strong>React</strong>.
              </li>
              <li>
                React sendet eine Anfrage an die <strong>Strapi-API</strong>
                (REST oder GraphQL).
              </li>
              <li>
                Strapi antwortet mit <strong>JSON-Daten</strong>.
              </li>
              <li>
                React baut aus diesen Daten die sichtbare Oberfläche
                (Komponenten, Karten, Listen …).
              </li>
            </ol>
          </ExampleCard>

          {/* ───────────────────────────────
              3. Wann nutzt man dieses Duo?
          ─────────────────────────────── */}
          <div style={{ height: 30 }}></div>

          <h2 style={{ textAlign: "center", marginBottom: 24 }}>
            Wann nutzt man dieses Duo?
          </h2>

          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* IDEAL-FÜR KARTE */}
            <div style={cardStyle}>
              <h3 style={{ color: "#16a34a", marginTop: 0 }}>✔ Ideal für</h3>
              <ul style={{ paddingLeft: 20, lineHeight: "1.6" }}>
                <li>
                  <strong>Individuelle Web-Apps</strong>
                  <br />
                  Dashboards, Portale, SaaS-Produkte.
                </li>
                <li>
                  <strong>Multi-Channel Projekte</strong>
                  <br />
                  Inhalte für Web, App &amp; Smartwatch gleichzeitig.
                </li>
                <li>
                  <strong>Hohe Interaktivität</strong>
                  <br />
                  Wenn sich viel auf der Seite bewegen soll.
                </li>
              </ul>
            </div>

            {/* WENIGER GEEIGNET */}
            <div style={cardStyle}>
              <h3 style={{ color: "#dc2626", marginTop: 0 }}>
                ✖ Weniger geeignet für
              </h3>
              <ul style={{ paddingLeft: 20, lineHeight: "1.6" }}>
                <li>
                  <strong>Einfache Blogs</strong>
                  <br />
                  WordPress ist hier oft schneller eingerichtet.
                </li>
                <li>
                  <strong>Kleine statische Seiten</strong>
                  <br />
                  Der Aufwand von zwei Systemen lohnt sich kaum.
                </li>
                <li>
                  <strong>Nur Text-Inhalte</strong>
                  <br />
                  Kein Bedarf an App-Funktionen oder Interaktivität.
                </li>
              </ul>
            </div>
          </div>

          {/* ───────────────────────────────
              4. Vorteile des Duos
          ─────────────────────────────── */}
          <div style={{ height: 30 }}></div>
          <ExampleCard title="Warum Strapi + React so gut zusammenpassen">
            <ul style={{ paddingLeft: 20, lineHeight: "1.6" }}>
              <li>
                Beide basieren auf <strong>JavaScript</strong> – vom Backend (Strapi)
                bis zum Frontend (React).
              </li>
              <li>
                <strong>API-first</strong>: Inhalte sind sauber strukturiert und
                können von beliebigen Clients genutzt werden.
              </li>
              <li>
                <strong>Komponenten</strong> in React + <strong>Content-Modelle</strong>{" "}
                in Strapi – ideal für wiederverwendbare Bausteine.
              </li>
              <li>
                Sehr gut geeignet für Projekte, die später{" "}
                <strong>Apps, Dashboards oder weitere Kanäle</strong> bekommen sollen.
              </li>
            </ul>
          </ExampleCard>

          {/* ───────────────────────────────
              5. Mini-Praxisbeispiel
          ─────────────────────────────── */}
          <div style={{ height: 24 }} />
          <ExampleCard title="Mini-Beispiel: Team-Seite mit Strapi & React">
            <p>
              Stell dir eine <strong>Team-Seite</strong> vor, auf der alle
              Projektmitglieder vorgestellt werden.
            </p>
            <ul style={{ paddingLeft: 20, lineHeight: "1.6" }}>
              <li>
                In <strong>Strapi</strong> gibt es ein Content-Modell
                <em> &quot;Team-Mitglied&quot;</em> mit Feldern wie Name, Rolle,
                Foto, Kurzbeschreibung.
              </li>
              <li>
                <strong>React</strong> holt diese Daten über die API und zeigt für
                jede Person eine Karte an.
              </li>
              <li>
                Wechselt jemand das Team oder kommt neu dazu? – Es reicht, den Eintrag
                in Strapi zu ändern.
              </li>
              <li>
                Die React-Seite zeigt automatisch den aktualisierten Stand –
                <strong>ohne</strong> den Code anfassen zu müssen.
              </li>
            </ul>
            <p>
              So wird klar: <strong>Strapi</strong> kümmert sich um den Inhalt,
              <strong> React</strong> um die Darstellung. Genau diese Trennung macht
              das Duo so flexibel.
            </p>
          </ExampleCard>
        </div>
      </section>
    </main>
  );
};

export default SynergyPage;
