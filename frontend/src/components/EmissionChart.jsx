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

function EmissionChart() {
  const [emissionsHistory, setEmissionsHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/emissions/history")
      .then((response) => {
        setEmissionsHistory(response.data.history);
      })
      .catch((error) => {
        console.error("Error fetching emissions history:", error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={emissionsHistory}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="emissions"
          stroke="#16a34a"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default EmissionChart;