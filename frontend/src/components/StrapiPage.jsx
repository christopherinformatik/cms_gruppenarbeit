import React, { useState } from "react";
import ExampleCard from "./ExampleCard";

const cardStyle = {
  width: 260,
  padding: 24,
  borderRadius: 16,
  border: "1px solid #e5e7eb",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  textAlign: "center",
  background: "#ffffff",
};

const StrapiPage = () => {
  const [showHeadless, setShowHeadless] = useState(false);

  return (
    <main className="App-main">
      <section className="content-section">
        <div className="content-wrapper">
          {/* Einleitung */}
          <ExampleCard title="Strapi – Headless CMS">
            <p>
              <strong>Was ist es?</strong> Ein <strong>Headless CMS</strong>. Es
              verwaltet Inhalte – nicht das Design.
            </p>
            <p>
              <strong>Das Prinzip:</strong> Stell es dir als{" "}
              <strong>zentrales Lager</strong> vor. Inhalte (Texte, Bilder)
              liegen hier bereit und warten auf Abholung durch das Frontend.
            </p>
            <p>
              <strong>Der Vorteil:</strong> Einmal Inhalte einpflegen – überall
              nutzen: Website, App, Smartwatch und mehr.
            </p>
          </ExampleCard>

          {/* Headless CMS Erklärung – Dropdown */}
          <div
            style={{
              width: "100%",
              maxWidth: 900,
              padding: 24,
              borderRadius: 16,
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              background: "#ffffff",
              margin: "24px auto",
              textAlign: "left",
              boxSizing: "border-box",
            }}
          >
            <button
              onClick={() => setShowHeadless(!showHeadless)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
                💡 Was ist ein Headless CMS?
              </h3>
              <span style={{ fontSize: 20 }}>{showHeadless ? "▲" : "▼"}</span>
            </button>

            {showHeadless && (
              <div style={{ marginTop: 16, fontSize: "0.95rem" }}>
                <p>
                  Ein <strong>Headless CMS</strong> trennt Inhalt (
                  <em>Content</em>) und Darstellung (<em>Frontend</em>)
                  vollständig voneinander. Die Inhalte werden zentral
                  gespeichert und über eine API an jede beliebige Anwendung
                  ausgeliefert.
                </p>

                <h4 style={{ marginBottom: 4 }}>Klassisches CMS</h4>
                <ul style={{ marginTop: 0 }}>
                  <li>Backend und Frontend sind fest miteinander verbunden</li>
                  <li>Layouts und Inhalte werden direkt zusammen ausgeliefert</li>
                  <li>weniger flexibel (typisch nur Websites)</li>
                </ul>

                <h4 style={{ marginBottom: 4 }}>Headless CMS (z. B. Strapi)</h4>
                <ul style={{ marginTop: 0 }}>
                  <li>verwaltet ausschließlich Inhalte</li>
                  <li>liefert Daten über eine API (REST oder GraphQL)</li>
                  <li>
                    Frontend-Technologie frei wählbar (React, Apps, Smartwatch
                    usw.)
                  </li>
                </ul>

                <h4 style={{ marginBottom: 4 }}>Vorteile</h4>
                <ul style={{ marginTop: 0 }}>
                  <li>Einmal Inhalte erstellen → überall verwenden</li>
                  <li>modern, flexibel und zukunftssicher</li>
                  <li>ideal für Multi-Plattform-Projekte</li>
                </ul>
              </div>
            )}
          </div>

          {/* Karten Bereich */}
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            {/* Open Source */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🟣</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Open Source</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Kostenlos (MIT-Lizenz)
                <br />
                Transparente, große Community.
              </p>
            </div>

            {/* Technologie */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🟦</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Technologie</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Basiert auf <strong>Node.js</strong>.
                <br />
                Modern, schnell &amp; JavaScript-basiert.
              </p>
            </div>

            {/* Flexibel */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>⚙️</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Flexibel</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Frei definierbare Content-Struktur.
                <br />
                Ideal für individuelle Projekte.
              </p>
            </div>

            {/* Sicherheit */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🔒</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Sicherheit</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Rollen &amp; Rechte
                <br />
                Authentifizierung
                <br />
                API-Berechtigungen
                <br />
                → perfekt für professionelle Apps.
              </p>
            </div>

            {/* API-System */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>📡</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>API-basiert</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                REST-API &amp; optional GraphQL.
                <br />
                Optimal für React-Apps.
              </p>
            </div>

            {/* Content-Modelle */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🎨</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Content-Modelle</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Blog-Posts, Produkte, FAQs, Teams, Projekte …
                <br />
                Alles per Klick – ohne Programmieren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StrapiPage;
