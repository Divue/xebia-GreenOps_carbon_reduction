export const dashboardData = {
  totalCarbonEmissions: 245.6,
  cloudCost: 1850.75,
  costPerKgCO2e: 7.54,
  carbonIntensity: 0.42,
  greenScore: "B",
  forecastedQuarterEmission: 280.4,
};

export const emissionsHistory = [
  { month: "Jan", emissions: 180 },
  { month: "Feb", emissions: 210 },
  { month: "Mar", emissions: 245 },
];

export const forecastData = [
  { month: "Apr", predictedEmission: 260 },
  { month: "May", predictedEmission: 275 },
  { month: "Jun", predictedEmission: 290 },
];

export const recommendations = [
  {
    title: "Right-size non-prod VMs",
    description: "Reduce over-provisioned instances",
    potentialReduction: "15%",
    estimatedSavings: "$120/month",
    priority: "High",
  },
  {
    title: "Move workload to greener region",
    description: "Migrate to lower-carbon region",
    potentialReduction: "10%",
    estimatedSavings: "$75/month",
    priority: "Medium",
  },
];

export const providerData = [
  {
    provider: "AWS",
    emissions: 140,
  },
  {
    provider: "Azure",
    emissions: 105,
  },
];

export const regionData = [
  { region: "us-east-1", emissions: 80 },
  { region: "eu-west-1", emissions: 60 },
  { region: "ap-south-1", emissions: 105 },
];