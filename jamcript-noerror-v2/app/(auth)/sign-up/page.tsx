"use client";
import { useState } from "react";

function Warning() {
  return (
    <div className="card" style={{ marginTop: 12 }}>
      <strong>Setup needed</strong>
      <p className="muted" style={{ marginTop: 6 }}>
        This is the deploy-safe build (no backend keys yet). After you add keys,
        we’ll turn this into real SaaS (auth + uploads + transcription + billing).
      </p>
    </div>
  );
}

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Backend not connected yet. This is the deploy-safe build.");
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 520 }}>
        <h1>Create account</h1>
        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
          <button className="btn btnPrimary" type="submit">Create account</button>
          <small>Already have an account? <a href="/sign-in">Sign in</a></small>
        </form>
        <Warning />
      </div>
    </div>
  );
}
