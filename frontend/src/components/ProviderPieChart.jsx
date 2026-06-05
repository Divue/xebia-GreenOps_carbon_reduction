import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { providerData } from "../data/mockData";

const COLORS = ["#16a34a", "#2563eb"];

function ProviderPieChart() {
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