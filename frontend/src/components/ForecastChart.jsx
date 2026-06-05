import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { forecastData } from "../data/mockData";

function ForecastChart() {
  return (
    <LineChart width={600} height={300} data={forecastData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="predictedEmission" />
    </LineChart>
  );
}

export default ForecastChart;