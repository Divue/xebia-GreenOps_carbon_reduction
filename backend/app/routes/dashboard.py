from fastapi import APIRouter
from app.schemas.cloud_usage import CloudUsage
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
        "status": "Pass",
        "message": "Sustainability target met"
    }


@router.get("/recommendations")
def get_recommendations():
    return {
        "recommendations": [
            {
                "title": "Right-size non-prod VMs",
                "description": "Reduce over-provisioned instances",
                "potentialReduction": "15%",
                "priority": "High"
            }
        ]
    }


@router.get("/emissions/history")
def emissions_history():
    return {
        "history": [
            {"month": "Jan", "emissions": 180},
            {"month": "Feb", "emissions": 210},
            {"month": "Mar", "emissions": 245}
        ]
    }


@router.get("/cloud-usage")
def cloud_usage():
    return {
        "provider": "AWS",
        "region": "us-east-1",
        "vmHours": 1200,
        "storageGB": 500,
        "networkGB": 300,
        "estimatedPowerKWh": 450,
        "estimatedCO2e": 90
    }

@router.post("/cloud-usage")
def add_cloud_usage(data: CloudUsage):
    return {
        "message": "Cloud usage received",
        "data": data
    }

@router.get("/pipeline-status")
def pipeline_status():
    return {
        "projectName": "GreenOps Dashboard",
        "greenScore": "B",
        "status": "Pass",
        "message": "Sustainability target met"
    }