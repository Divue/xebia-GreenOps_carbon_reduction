import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useState, useEffect } from "react";
import axios from "axios";

function ForecastChart() {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/forecast")
      .then((response) => {
        setForecastData(response.data.forecast);
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={forecastData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="predictedEmission"
          stroke="#2563eb"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ForecastChart;