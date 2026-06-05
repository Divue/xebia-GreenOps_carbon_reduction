from loaders.grade_loader import GradeLoader


class RecommendationEngine:

    def __init__(
        self,
        grade_file="config/grades.json"
    ):

        self.grade_loader = GradeLoader(
            grade_file
        )

    def green_score(
        self,
        carbon_kg
    ):

        return self.grade_loader.get_grade(
            carbon_kg
        )

    def suggest(
        self,
        carbon_kg,
        utilization
    ):

        recommendations = []

        grade = self.green_score(
            carbon_kg
        )

        if utilization < 25:

            recommendations.append(
                {
                    "type": "rightsizing",
                    "message":
                    "Resource appears underutilized."
                }
            )

        if grade in ["D", "F"]:

            recommendations.append(
                {
                    "type": "carbon",
                    "message":
                    "High carbon footprint detected."
                }
            )

        return recommendations