GreenOps Backend API Contract (v1)
1. Dashboard Summary

GET /api/dashboard

{
  "totalCarbonEmissions": 245.6,
  "cloudCost": 1850.75,
  "costPerKgCO2e": 7.54,
  "carbonIntensity": 0.42,
  "greenScore": "B",
  "forecastedQuarterEmission": 280.4
}
2. Cloud Usage Data

GET /api/cloud-usage

{
  "provider": "AWS",
  "region": "us-east-1",
  "vmHours": 1200,
  "storageGB": 500,
  "networkGB": 300,
  "estimatedPowerKWh": 450,
  "estimatedCO2e": 90
}
3. Emissions Trend

GET /api/emissions/history

{
  "history": [
    {
      "month": "Jan",
      "emissions": 180
    },
    {
      "month": "Feb",
      "emissions": 210
    },
    {
      "month": "Mar",
      "emissions": 245
    }
  ]
}
4. Carbon Forecast

GET /api/forecast

{
  "forecast": [
    {
      "month": "Apr",
      "predictedEmission": 260
    },
    {
      "month": "May",
      "predictedEmission": 275
    },
    {
      "month": "Jun",
      "predictedEmission": 290
    }
  ]
}
5. Green Score

GET /api/green-score

{
  "score": "B",
  "carbonIntensity": 0.42,
  "status": "Pass",
  "message": "Sustainability target met"
}

Possible statuses:

Pass
Warning
Critical
6. Optimization Recommendations

GET /api/recommendations

{
  "recommendations": [
    {
      "title": "Right-size non-prod VMs",
      "description": "Reduce over-provisioned instances",
      "potentialReduction": "15%",
      "estimatedSavings": "$120/month",
      "priority": "High"
    },
    {
      "title": "Move workload to greener region",
      "description": "Migrate to lower-carbon region",
      "potentialReduction": "10%",
      "estimatedSavings": "$75/month",
      "priority": "Medium"
    }
  ]
}
7. Carbon Breakdown by Cloud Provider

GET /api/emissions/by-provider

{
  "providers": [
    {
      "provider": "AWS",
      "emissions": 140
    },
    {
      "provider": "Azure",
      "emissions": 105
    }
  ]
}
8. Carbon Breakdown by Region

GET /api/emissions/by-region

{
  "regions": [
    {
      "region": "us-east-1",
      "emissions": 80
    },
    {
      "region": "eu-west-1",
      "emissions": 60
    },
    {
      "region": "ap-south-1",
      "emissions": 105
    }
  ]
}
9. CI/CD Shift-Left Sustainability Check

GET /api/pipeline-status

{
  "projectName": "GreenOps Dashboard",
  "greenScore": "D",
  "status": "Warning",
  "message": "Carbon threshold exceeded. Review infrastructure configuration."
}