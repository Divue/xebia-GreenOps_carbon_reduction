import { dashboardData } from "../data/mockData";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>GreenOps AI Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>
        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Total Emissions</h3>
          <p>{dashboardData.totalCarbonEmissions} kg CO₂e</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Cloud Cost</h3>
          <p>${dashboardData.cloudCost}</p>
        </div>

        <div style={{ border: "1px solid gray", padding: "20px" }}>
          <h3>Green Score</h3>
          <p>{dashboardData.greenScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;