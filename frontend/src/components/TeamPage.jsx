import React from "react";
import ExampleCard from "./ExampleCard";

const teamCardStyle = {
  width: 220,
  padding: 24,
  borderRadius: 16,
  border: "1px solid #e5e7eb",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  textAlign: "center",
  background: "#ffffff",
  color: "#111827",
};

const techCardStyle = {
  minWidth: 180,
  padding: 16,
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  background: "#ffffff",
  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
  textAlign: "center",
};

const TeamPage = () => {
  return (
    <main className="App-main">
      <section className="content-section">
        <div className="content-wrapper">
          {/* 1️⃣ Kurze Einleitung */}
          <ExampleCard title="Das Projektteam">
            <p>
              Wir sind ein studentisches Projektteam der Hochschule für
              Wirtschaft und Recht Berlin. Im Rahmen des Moduls
              <strong> Content Management Systeme</strong> haben wir ein
              vollständiges Headless-CMS-Projekt mit <strong>Strapi</strong> und{" "}
              <strong>React</strong> umgesetzt – von der Installation bis zur
              fertigen Website.
            </p>
          </ExampleCard>

          {/* 2️⃣ Teamkacheln */}
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <div style={teamCardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🧑‍💻</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Nora Androleit</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>Projektmitglied</p>
            </div>

            <div style={teamCardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🧑‍💻</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Jannis Franzen</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>Projektmitglied</p>
            </div>

            <div style={teamCardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🧑‍💻</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Leah Kristin Meyer</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>Projektmitglied</p>
            </div>

            <div style={teamCardStyle}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🧑‍💻</div>
              <h3 style={{ margin: 0, marginBottom: 8 }}>Christopher Yousufzad</h3>
              <p style={{ margin: 0, color: "#4b5563" }}>Projektmitglied</p>
            </div>
          </div>

          {/* 3️⃣ Unser Projektziel */}
          <div style={{ marginTop: 32 }}>
            <ExampleCard title="Unser Projektziel">
              <p>
                Ziel unseres Projekts war es, ein modernes Headless CMS
                aufzusetzen, Inhalte zentral zu verwalten und diese über ein
                React-Frontend dynamisch darzustellen. Dabei lag der Fokus auf:
              </p>
              <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                <li>einfacher Bedienbarkeit</li>
                <li>sauberer Trennung von Backend und Frontend</li>
                <li>modularer, erweiterbarer Struktur</li>
              </ul>
            </ExampleCard>
          </div>

          {/* 4️⃣ Verwendete Technologien */}
          <div style={{ marginTop: 32 }}>
            <ExampleCard title="Verwendete Technologien">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  justifyContent: "center",
                  marginTop: 8,
                }}
              >
                <div style={techCardStyle}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>🟣</div>
                  <strong>Strapi</strong>
                  <div style={{ fontSize: 14, color: "#4b5563" }}>
                    Headless CMS
                  </div>
                </div>

                <div style={techCardStyle}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>🔵</div>
                  <strong>React</strong>
                  <div style={{ fontSize: 14, color: "#4b5563" }}>
                    Frontend Library
                  </div>
                </div>

                <div style={techCardStyle}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>🐳</div>
                  <strong>Docker</strong>
                  <div style={{ fontSize: 14, color: "#4b5563" }}>
                    Containerisierung
                  </div>
                </div>

                <div style={techCardStyle}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>🔐</div>
                  <strong>JWT Auth</strong>
                  <div style={{ fontSize: 14, color: "#4b5563" }}>
                    Login-Handling
                  </div>
                </div>
              </div>
            </ExampleCard>
          </div>

          {/* 5️⃣ Abschluss / Dank */}
          <div style={{ marginTop: 32 }}>
            <ExampleCard title="Danke!">
              <p>
                Wir bedanken uns für die Zusammenarbeit im Modul und hoffen,
                dass unser Projekt einen guten Einblick in moderne
                Web-Architekturen bietet.
              </p>
            </ExampleCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
