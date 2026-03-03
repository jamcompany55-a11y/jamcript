export default function Pricing() {
  return (
    <div className="container">
      <h1>Pricing</h1>
      <div className="grid grid2">
        <div className="card">
          <h2>Free</h2>
          <p className="muted">200 minutes / month</p>
          <a className="btn btnPrimary" href="/sign-up">Start Free</a>
        </div>
        <div className="card">
          <h2>Pro</h2>
          <p className="muted">Unlimited (fair-use)</p>
          <a className="btn btnPrimary" href="/app/billing">Upgrade</a>
        </div>
      </div>
      <p className="muted" style={{ marginTop: 16 }}>
        This build is optimized to deploy with zero config. We’ll add real billing after keys.
      </p>
    </div>
  );
}
