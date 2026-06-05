from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["Dashboard"])

@router.get("/dashboard")
def get_dashboard():
    return {
        "totalCarbonEmissions": 245.6,
        "cloudCost": 1850.75,
        "costPerKgCO2e": 7.54,
        "carbonIntensity": 0.42,
        "greenScore": "B",
        "forecastedQuarterEmission": 280.4
    }

@router.get("/forecast")
def get_forecast():
    return {
        "forecast": [
            {"month": "Jul", "predictedEmission": 260},
            {"month": "Aug", "predictedEmission": 275},
            {"month": "Sep", "predictedEmission": 290}
        ]
    }


@router.get("/green-score")
def get_green_score():
    return {
        "score": "B",
        "carbonIntensity": 0.42,
        "status": "Pass"
    }


@router.get("/recommendations")
def get_recommendations():
    return {
        "recommendations": [
            {
                "title": "Right-size non-prod VMs",
                "potentialReduction": "15%"
            }
        ]
    }