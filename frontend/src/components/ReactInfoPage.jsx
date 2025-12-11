import React from "react";
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

const ReactPage = () => {
  return (
    <main className="App-main">
      <section className="content-section">
        <div className="content-wrapper">
          {/* Einleitung */}
          <ExampleCard title="React – Frontend Library">
            <p>
              <strong>Was ist es?</strong> React ist eine{" "}
              <strong>JavaScript-Bibliothek für Benutzeroberflächen (UIs)</strong>.
            </p>
            <p>
              <strong>Das Prinzip:</strong> Bauen mit{" "}
              <strong>&quot;Lego-Steinen&quot; (Komponenten)</strong>. Ein Button,
              ein Header, eine Karte – alles ist ein wiederverwendbarer Baustein.
            </p>
            <p>
              <strong>Herkunft:</strong> Ursprünglich von <strong>Meta (Facebook)</strong>{" "}
              entwickelt, um hoch interaktive und performante Webanwendungen zu bauen.
            </p>
          </ExampleCard>

          {/* Karten Bereich – gleiches Design wie auf der Strapi-Seite */}
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            {/* Marktführer */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏆</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Marktführer</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Eine der beliebtesten Frontend-Technologien weltweit. <br />
                Riesiges Ökosystem.
              </p>
            </div>

            {/* Virtual DOM */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>⚡</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Virtual DOM</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Extrem schnell: Aktualisiert nur die Teile der Seite, die sich
                wirklich ändern.
              </p>
            </div>

            {/* Komponenten */}
            <div style={cardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🧩</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Komponenten</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>
                Wiederverwendbarer Code sorgt für Konsistenz
                <br />
                und schnelle Entwicklung.
              </p>
            </div>

            {/* Deklarativ */}
            <div style={cardStyle}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🎛️</div>
            <h3 style={{ margin: 0, marginBottom: 8 }}>Deklarativ</h3>
            <p style={{ margin: 0, color: "#4b5563" }}>
                React beschreibt nur <strong>was</strong> angezeigt werden soll –
                nicht <strong>wie</strong>. Dadurch entsteht klarer,
                fehlerärmerer Code.
            </p>
            </div>

            {/* Hooks */}
            <div style={cardStyle}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🔄</div>
            <h3 style={{ margin: 0, marginBottom: 8 }}>Hooks</h3>
            <p style={{ margin: 0, color: "#4b5563" }}>
                Moderne React-Projekte basieren auf Hooks wie
                <strong> useState</strong> & <strong>useEffect</strong>.
                Macht Logik wiederverwendbar und übersichtlich.
            </p>
            </div>

            {/* Ökosystem */}
            <div style={cardStyle}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🌐</div>
            <h3 style={{ margin: 0, marginBottom: 8 }}>Ökosystem</h3>
            <p style={{ margin: 0, color: "#4b5563" }}>
                Riesige Community, viele Tools und Bibliotheken –
                ideal für jede Art von Projekt.
            </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ReactPage;
