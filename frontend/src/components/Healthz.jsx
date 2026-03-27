import React from "react";
import "../styles/Healthz.css";

export default function Healthz() {
  return (
    <div className="healthz-page" id="healthz-page">
      <main className="healthz-container" id="healthz-container">
        <h2 className="healthz-title" id="healthz-title">Health Check</h2>

        <pre className="healthz-json" id="healthz-json">
{`{
  "ok": true,
  "version": "1.0"
}`}
        </pre>
      </main>
    </div>
  );
}
