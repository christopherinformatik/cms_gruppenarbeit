import React, { useState } from "react";
import ExampleCard from "./ExampleCard";

// Wiederverwendbare Section mit Dropdown
const InstallSection = ({ title, children }) => {
  const [open, setOpen] = useState(false); // Jetzt standardmäßig geschlossen!

  return (
    <div style={{ marginBottom: 24 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "16px 20px",
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          fontWeight: 600,
          fontSize: 18,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          style={{
            marginTop: 12,
            padding: 24,
            background: "#ffffff",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
            color: "#111827",
            lineHeight: 1.6,
            textAlign: "left", // Links ausrichten ✔
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const InstallationPage = () => {
  return (
    <main className="App-main">
      <section className="content-section">
        <div className="content-wrapper">
        
          {/* Einleitung */}
          <ExampleCard title="Installation mit Docker">
            <p style={{ textAlign: "left" }}>
              Auf dieser Seite zeigen wir, wie unser Projekt mit <strong>Docker</strong> gestartet wird:
              <strong> Strapi</strong> (Backend) und <strong>React</strong> (Frontend)
              laufen dabei in eigenen Containern.
            </p>
            <p style={{ textAlign: "left" }}>
              Vorteil: Alle brauchen nur Docker – keine lokale Node-Installation
              oder komplizierte Einrichtung.
            </p>
          </ExampleCard>

          {/* Voraussetzungen */}
          <InstallSection title="🧰 Voraussetzungen (Was du brauchst)">
            <ul>
              <li><strong>Docker Desktop</strong> (Windows / macOS) oder Docker Engine (Linux)</li>
              <li><strong>docker compose</strong> im Terminal verfügbar</li>
              <li>Ein Terminal / PowerShell / Konsole</li>
              <li>Optional: Ein Code-Editor wie VS Code</li>
            </ul>
          </InstallSection>

          {/* Projektstruktur */}
          <InstallSection title="📁 Projektstruktur (vereinfacht)">
            <p>Unser Projekt hat diese Struktur:</p>
            <pre
              style={{
                background: "#f3f4f6",
                padding: 12,
                borderRadius: 8,
                overflowX: "auto",
              }}
            >
{`cms_gruppenarbeit/
├─ backend/      # Strapi-Projekt
├─ frontend/     # React-App
└─ docker-compose.yml`}
            </pre>
            <p>
              Die <code>docker-compose.yml</code> definiert die Container, Ports, Umgebungen usw.
            </p>
          </InstallSection>

          {/* Compose starten */}
          <InstallSection title="🐳 Container bauen & starten">
            <p>Im Projektordner im Terminal eingeben:</p>
            <pre style={{ background: "#f3f4f6", padding: 12, borderRadius: 8 }}>
{`docker compose up --build`}
            </pre>
            <ul>
              <li><strong>--build</strong> baut Images neu → wichtig nach Codeänderungen.</li>
              <li>Beim ersten Start lädt Docker viele Abhängigkeiten.</li>
            </ul>
          </InstallSection>

          {/* Ports */}
          <InstallSection title="🌐 Wichtige Ports & URLs">
            <ul>
              <li><strong>Strapi Admin:</strong> http://localhost:1337/admin</li>
              <li><strong>Strapi API:</strong> http://localhost:1337/api/…</li>
              <li><strong>React Frontend:</strong> http://localhost:3000</li>
            </ul>
          </InstallSection>

          {/* API Kommunikation */}
          <InstallSection title="🔗 Wie React mit Strapi kommuniziert">
            <p>Ein einfaches Beispiel für API-Abfragen:</p>
            <pre style={{ background: "#f3f4f6", padding: 12, borderRadius: 8 }}>
{`fetch("http://localhost:1337/api/articles")
  .then(res => res.json())
  .then(data => console.log(data));`}
            </pre>
            <p>
              Wichtig: In Strapi unter <strong>Settings → Roles → Public</strong>
              müssen Berechtigungen aktiviert werden.
            </p>
          </InstallSection>

          {/* Wichtige Docker Befehle */}
          <InstallSection title="🛠 Typische Docker-Befehle">
            <ul>
              <li><strong>Starten:</strong>
                <pre>docker compose up</pre>
              </li>
              <li><strong>Hintergrundmodus:</strong>
                <pre>docker compose up -d</pre>
              </li>
              <li><strong>Stoppen:</strong>
                <pre>docker compose down</pre>
              </li>
              <li><strong>Logs ansehen:</strong>
                <pre>docker compose logs backend</pre>
              </li>
            </ul>
          </InstallSection>

          {/* Zusammenfassung */}
          <InstallSection title="✅ Zusammenfassung">
            <ol>
              <li>Projekt herunterladen</li>
              <li>Docker starten</li>
              <li><code>docker compose up --build</code> ausführen</li>
              <li>Strapi unter <code>localhost:1337/admin</code> öffnen</li>
              <li>Frontend unter <code>localhost:3000</code> öffnen</li>
            </ol>
          </InstallSection>

        </div>
      </section>
    </main>
  );
};

export default InstallationPage;
