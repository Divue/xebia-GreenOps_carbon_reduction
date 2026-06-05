import json


class GradeLoader:

    def __init__(
        self,
        grade_file: str
    ):

        with open(grade_file, "r") as f:

            self.grades = json.load(f)

    def get_grade(
        self,
        carbon_kg: float
    ):

        for grade, limits in self.grades.items():

            if (
                limits["min"]
                <= carbon_kg
                < limits["max"]
            ):
                return grade

        return "UNKNOWN"