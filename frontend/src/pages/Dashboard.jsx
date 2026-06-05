import { dashboardData } from "../data/mockData";
import EmissionChart from "../components/EmissionChart";
import ForecastChart from "../components/ForecastChart";
import RecommendationCard from "../components/RecommendationCard";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🌱 GreenOps AI Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Carbon Emissions</h3>
          <p>{dashboardData.totalCarbonEmissions} kg CO₂e</p>
        </div>

        <div style={cardStyle}>
          <h3>Cloud Cost</h3>
          <p>${dashboardData.cloudCost}</p>
        </div>

        <div style={cardStyle}>
          <h3>Cost per Kg CO₂e</h3>
          <p>${dashboardData.costPerKgCO2e}</p>
        </div>

        <div style={cardStyle}>
          <h3>Carbon Intensity</h3>
          <p>{dashboardData.carbonIntensity}</p>
        </div>

        <div style={cardStyle}>
          <h3>Green Score</h3>
          <p>{dashboardData.greenScore}</p>
        </div>

        <div style={cardStyle}>
          <h3>Forecasted Quarter Emission</h3>
          <p>{dashboardData.forecastedQuarterEmission} kg CO₂e</p>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Carbon Emissions Trend</h2>
        <EmissionChart />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Carbon Emission Forecast</h2>
        <ForecastChart />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Optimization Recommendations</h2>
        <RecommendationCard />
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

export default Dashboard;