import { dashboardData } from "../data/mockData";
import EmissionChart from "../components/EmissionChart";
import ForecastChart from "../components/ForecastChart";
import RecommendationCard from "../components/RecommendationCard";
import Sidebar from "../components/Sidebar";
import ProviderPieChart from "../components/ProviderPieChart";
import RegionBarChart from "../components/RegionBarChart";

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#eef2f7",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          width: "100%",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "10px",
            }}
          >
            🌱 GreenOps AI Dashboard
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
            }}
          >
            Monitor carbon emissions, cloud costs and sustainability metrics.
          </p>
        </div>

        {/* KPI Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={titleStyle}>Total Carbon Emissions</h3>
            <p style={valueStyle}>
              {dashboardData.totalCarbonEmissions} kg CO₂e
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Cloud Cost</h3>
            <p style={valueStyle}>${dashboardData.cloudCost}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Cost per Kg CO₂e</h3>
            <p style={valueStyle}>${dashboardData.costPerKgCO2e}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Carbon Intensity</h3>
            <p style={valueStyle}>{dashboardData.carbonIntensity}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Green Score</h3>

            <p
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#16a34a",
                margin: 0,
              }}
            >
              {dashboardData.greenScore}
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Forecasted Quarter Emission</h3>
            <p style={valueStyle}>
              {dashboardData.forecastedQuarterEmission} kg CO₂e
            </p>
          </div>
        </div>

        {/* Emissions Chart */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>📈 Carbon Emissions Trend</h2>
          <EmissionChart />
        </div>

        {/* Forecast Chart */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>🔮 Carbon Emission Forecast</h2>
          <ForecastChart />
        </div>

        {/* Recommendations */}
        <div style={sectionStyle}>
          <h2 style={sectionTitle}>💡 Optimization Recommendations</h2>
          <RecommendationCard />
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitle}>
            ☁️ Carbon Emissions by Cloud Provider
          </h2>

          <ProviderPieChart />
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitle}>
            🌍 Carbon Emissions by Region
          </h2>

          <RegionBarChart />
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};

const titleStyle = {
  color: "#4b5563",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "12px",
};

const valueStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#111827",
  margin: 0,
};

const sectionStyle = {
  marginTop: "30px",
  backgroundColor: "#ffffff",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const sectionTitle = {
  color: "#111827",
  marginBottom: "20px",
};

export default Dashboard;