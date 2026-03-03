export default function Dashboard() {
  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>
        <p className="muted">Deploy-safe placeholder. Next: connect backend and show usage + files.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn btnPrimary" href="/app/upload">Upload</a>
          <a className="btn" href="/app/files">My files</a>
          <a className="btn" href="/app/billing">Billing</a>
          <a className="btn" href="/">Home</a>
        </div>
      </div>
    </div>
  );
}
