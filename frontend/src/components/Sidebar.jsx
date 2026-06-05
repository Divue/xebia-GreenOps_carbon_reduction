function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>🌱 GreenOps</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "20px 0" }}>Dashboard</li>
        <li style={{ margin: "20px 0" }}>Forecast</li>
        <li style={{ margin: "20px 0" }}>Recommendations</li>
        <li style={{ margin: "20px 0" }}>Green Score</li>
      </ul>
    </div>
  );
}

export default Sidebar;