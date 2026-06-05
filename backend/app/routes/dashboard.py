from fastapi import APIRouter
from app.schemas.cloud_usage import CloudUsage
from carbon_engine.service import CarbonService
from carbon_engine.models.resource import ResourceRequest
from carbon_engine.recommendations.engine import RecommendationEngine
router = APIRouter(prefix="/api", tags=["Dashboard"])

carbon_service = CarbonService(
    "carbon_engine/data/resources.json"
)

recommendation_engine = RecommendationEngine(
    "carbon_engine/data/grades.json"
)

@router.get("/dashboard")
def get_dashboard():

    request = ResourceRequest(
        resource="aws_ec2",
        resource_type="t3.medium",
        usage=720,
        region="ap-south-1",
        cpu_utilization=65
    )

    result = carbon_service.calculate(request)

    return {
        "totalCarbonEmissions":
            result["carbon_generated_kg_co2e"],

        "cloudCost": 1850.75,

        "costPerKgCO2e": 7.54,

        "carbonIntensity":
            result["carbon_intensity"],

        "greenScore":
            recommendation_engine.green_score(
                result["carbon_generated_kg_co2e"]
            ),

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

    request = ResourceRequest(
        resource="aws_ec2",
        resource_type="t3.medium",
        usage=720,
        region="ap-south-1",
        cpu_utilization=40
    )

    result = carbon_service.calculate(request)

    score = recommendation_engine.green_score(
        result["carbon_generated_kg_co2e"]
    )

    return {
        "score": score,
        "carbonIntensity":
            result["carbon_intensity"],
        "status": "Pass"
    }


@router.get("/recommendations")
def get_recommendations():

    request = ResourceRequest(
        resource="aws_ec2",
        resource_type="t3.medium",
        usage=720,
        region="ap-south-1",
        cpu_utilization=20
    )

    result = carbon_service.calculate(request)

    recommendations = recommendation_engine.suggest(
        carbon_kg=result["carbon_generated_kg_co2e"],
        utilization=request.cpu_utilization
    )

    return {
        "recommendations": recommendations
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