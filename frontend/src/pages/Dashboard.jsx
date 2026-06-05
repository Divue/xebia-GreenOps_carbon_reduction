import { dashboardData } from "../data/mockData";
import EmissionChart from "../components/EmissionChart";
import ForecastChart from "../components/ForecastChart";
import RecommendationCard from "../components/RecommendationCard";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex", background: "#f5f7fa" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          🌱 GreenOps AI Dashboard
        </h1>

        {/* KPI Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
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
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#16a34a",
              }}
            >
              {dashboardData.greenScore}
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Forecasted Quarter Emission</h3>
            <p>{dashboardData.forecastedQuarterEmission} kg CO₂e</p>
          </div>
        </div>

        {/* Emissions Chart */}
        <div style={sectionStyle}>
          <h2>📈 Carbon Emissions Trend</h2>
          <EmissionChart />
        </div>

        {/* Forecast Chart */}
        <div style={sectionStyle}>
          <h2>🔮 Carbon Emission Forecast</h2>
          <ForecastChart />
        </div>

        {/* Recommendations */}
        <div style={sectionStyle}>
          <h2>💡 Optimization Recommendations</h2>
          <RecommendationCard />
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const sectionStyle = {
  marginTop: "40px",
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

export default Dashboard;