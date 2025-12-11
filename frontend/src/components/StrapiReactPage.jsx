import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExampleCard from "./ExampleCard";

const cardStyle = {
  width: 260,
  padding: 24,
  borderRadius: 16,
  border: "1px solid #e5e7eb",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  textAlign: "center",
  background: "#ffffff",
  color: "#111827",
};

// Tabellen-Zellen Styles
const rowHeaderStyle = {
  padding: "14px 20px",
  borderBottom: "1px solid #e5e7eb",
  fontWeight: 600,
  background: "#ffffff",
  color: "#111827",
};

const rowCellStyle = {
  padding: "14px 20px",
  borderBottom: "1px solid #e5e7eb",
  background: "#ffffff",
  color: "#111827",
};

const StrapiReactPage = () => {
  const [showOverview, setShowOverview] = useState(false);

  return (
    <main className="App-main">
      <section className="content-section">
        <div className="content-wrapper">

          {/* Intro */}
          <ExampleCard title="Strapi × React">
            <p>
              Auf dieser Seite zeigen wir unseren Technologie-Stack:
              <strong> Strapi</strong> als Headless CMS im Backend und
              <strong> React</strong> als Bibliothek für das Frontend.
            </p>
            <p>
              Wähle einen Bereich aus, um mehr zu erfahren oder sieh dir an, wie
              beide zusammenarbeiten.
            </p>
          </ExampleCard>

          {/* Karten */}
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Strapi Card */}
            <Link to="/strapi" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={cardStyle}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>📦</div>
                <h3 style={{ marginBottom: 8 }}>Strapi</h3>
                <p style={{ margin: 0, color: "#4b5563" }}>
                  Das digitale Lagerhaus
                  <br />
                  <span style={{ fontSize: 14 }}>(Headless CMS)</span>
                </p>
              </div>
            </Link>

            {/* React Card */}
            <Link to="/react" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={cardStyle}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>⚛️</div>
                <h3 style={{ marginBottom: 8 }}>React</h3>
                <p style={{ margin: 0, color: "#4b5563" }}>
                  Der Baukasten
                  <br />
                  <span style={{ fontSize: 14 }}>(Frontend-Library)</span>
                </p>
              </div>
            </Link>

            {/* Synergie Card */}
            <Link to="/synergie" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={cardStyle}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🤝</div>
                <h3 style={{ marginBottom: 8 }}>Synergie</h3>
                <p style={{ margin: 0, color: "#4b5563" }}>
                  Wie beide zusammen
                  <br />
                  eine moderne Web-App bilden
                </p>
              </div>
            </Link>
          </div>

          {/* Dropdown: Alles auf einen Blick */}
          <div style={{ marginTop: 32 }}>
            <button
              onClick={() => setShowOverview(!showOverview)}
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
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                cursor: "pointer",
              }}
            >
              📊 Alles auf einen Blick
              <span>{showOverview ? "▲" : "▼"}</span>
            </button>

            {showOverview && (
              <div
                style={{
                  marginTop: 12,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: "#ffffff",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "16px 20px",
                          background: "#ffffff",
                          fontWeight: 700,
                          fontSize: 16,
                          borderBottom: "1px solid #e5e7eb",
                          color: "#111827",
                        }}
                      >
                        Merkmal
                      </th>
                      <th
                        style={{
                          padding: "16px 20px",
                          background: "linear-gradient(135deg,#4f46e5,#6366f1)",
                          fontWeight: 700,
                          fontSize: 16,
                          textAlign: "left",
                          color: "white",
                        }}
                      >
                        Strapi
                      </th>
                      <th
                        style={{
                          padding: "16px 20px",
                          background: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
                          fontWeight: 700,
                          fontSize: 16,
                          textAlign: "left",
                          color: "white",
                        }}
                      >
                        React
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={rowHeaderStyle}>Funktion</td>
                      <td style={rowCellStyle}>Verwaltet Inhalte (Backend)</td>
                      <td style={rowCellStyle}>Zeigt Inhalte an (Frontend)</td>
                    </tr>
                    <tr>
                      <td style={rowHeaderStyle}>Analogie</td>
                      <td style={rowCellStyle}>Das Lagerhaus</td>
                      <td style={rowCellStyle}>Der Baukasten / das Schaufenster</td>
                    </tr>
                    <tr>
                      <td style={rowHeaderStyle}>Technologie</td>
                      <td style={rowCellStyle}>Node.js / Datenbank</td>
                      <td style={rowCellStyle}>JavaScript / Browser</td>
                    </tr>
                    <tr>
                      <td style={rowHeaderStyle}>Kosten</td>
                      <td style={rowCellStyle}>Open Source (kostenlos)</td>
                      <td style={rowCellStyle}>Open Source (kostenlos)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StrapiReactPage;
