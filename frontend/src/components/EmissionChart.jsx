import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { emissionsHistory } from "../data/mockData";

function EmissionChart() {
  return (
    <LineChart width={600} height={300} data={emissionsHistory}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="emissions" />
    </LineChart>
  );
}

export default EmissionChart;