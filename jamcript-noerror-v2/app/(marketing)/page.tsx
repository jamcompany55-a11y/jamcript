export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1 style={{ fontSize: 44, margin: 0 }}>Jamcript</h1>
        <p className="muted" style={{ fontSize: 18 }}>
          Fast & accurate AI transcription. Upload audio/video → get text + SRT.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
          <a className="btn btnPrimary" href="/sign-up">Start free (200 min/month)</a>
          <a className="btn" href="/pricing">View pricing</a>
          <a className="btn" href="/sign-in">Sign in</a>
        </div>
      </div>

      <div className="grid grid2" style={{ marginTop: 16 }}>
        <div className="card"><h3>Accurate</h3><p className="muted">Clean transcripts ready to copy or export.</p></div>
        <div className="card"><h3>Fast</h3><p className="muted">Simple flow: upload → process → download.</p></div>
        <div className="card"><h3>Downloadable</h3><p className="muted">TXT + SRT export.</p></div>
        <div className="card"><h3>Secure</h3><p className="muted">Private-by-default architecture (plug in later).</p></div>
      </div>
    </div>
  );
}
