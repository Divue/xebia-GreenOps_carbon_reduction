import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useState, useEffect } from "react";
import axios from "axios";

const COLORS = ["#16a34a", "#2563eb", "#f59e0b", "#ef4444"];

function ProviderPieChart() {
  const [providerData, setProviderData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/emissions/by-provider")
      .then((response) => {
        setProviderData(response.data.providers);
      })
      .catch((error) => {
        console.error(
          "Error fetching provider emissions data:",
          error
        );
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={450}>
      <PieChart>
        <Pie
          data={providerData}
          dataKey="emissions"
          nameKey="provider"
          outerRadius={160}
          label
        >
          {providerData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ProviderPieChart;