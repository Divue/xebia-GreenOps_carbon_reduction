import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { regionData } from "../data/mockData";

function RegionBarChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={regionData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="region" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="emissions" fill="#16a34a" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RegionBarChart;