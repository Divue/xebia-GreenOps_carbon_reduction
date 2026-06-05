


# Example Usage

## Usage scr
```python
from service import CarbonService
from models.resource import ResourceRequest

service = CarbonService(
    "data/resources.json"
)

request = ResourceRequest(
    resource="aws_ec2",
    resource_type="t3.medium",
    usage=720,
    carbon_intensity=0.4
)

result = service.calculate(request)

print(result)
```
## Output
 ```JSON
 {
  "resource": "aws_ec2",
  "resource_type": "t3.medium",
  "usage": 720,
  "energy_consumed_kwh": 36.0,
  "carbon_generated_kg_co2e": 14.4
}
 ```
 
 Example Usage
 ```python
from service import CarbonService
from models.resource import ResourceRequest
from recommendations.engine import RecommendationEngine


carbon_service = CarbonService(
    metadata_path="data/resources.json"
)

recommendation_engine = RecommendationEngine(
    grade_file="data/grades.json"
)

request = ResourceRequest(
    resource="aws_ec2",
    resource_type="t3.medium",
    usage=720,
    region="ap-south-1",
    cpu_utilization=65
)

result = carbon_service.calculate(
    request
)

green_score = (
    recommendation_engine.green_score(
        result["carbon_generated_kg_co2e"]
    )
)

recommendations = (
    recommendation_engine.suggest(
        carbon_kg=result[
            "carbon_generated_kg_co2e"
        ],
        utilization=request.cpu_utilization
    )
)

print(result)

print(
    f"\nGreen Score: {green_score}"
)

for recommendation in recommendations:

    print(
        recommendation["message"]
    )

 ```


 Example 1 — EC2
request = ResourceRequest(
    resource="aws_ec2",
    resource_type="m5.large",
    usage=720,
    region="ap-south-1",
    cpu_utilization=40
)
Example 2 — S3
request = ResourceRequest(
    resource="storage",
    resource_type="aws_s3_standard",
    usage=1000,
    region="ap-south-1"
)
Example 3 — Lambda
request = ResourceRequest(
    resource="aws_lambda",
    resource_type="default",
    usage=0,
    region="us-east-1",
    requests_count=5000000
)

Calculation:

5 million requests
× 0.8 kWh per million

= 4.0 kWh
Example 4 — DynamoDB
request = ResourceRequest(
    resource="database",
    resource_type="aws_dynamodb",
    usage=0,
    region="us-east-1",
    requests_count=10000000