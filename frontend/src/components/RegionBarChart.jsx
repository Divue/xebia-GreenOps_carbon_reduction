import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { useState, useEffect } from "react";
import axios from "axios";

function RegionBarChart() {
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/emissions/by-region")
      .then((response) => {
        setRegionData(response.data.regions);
      })
      .catch((error) => {
        console.error(
          "Error fetching region emissions data:",
          error
        );
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={regionData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="region" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="emissions"
          fill="#16a34a"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RegionBarChart;