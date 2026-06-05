class OptimizationEngine:

    def __init__(self, resources_metadata):

        self.resources_metadata = resources_metadata

    def analyze(
        self,
        resource_result,
        request
    ):

        recommendations = []

        carbon = resource_result[
            "carbon_generated_kg_co2e"
        ]

        energy = resource_result[
            "energy_kwh"
        ]

        utilization = getattr(
            request,
            "cpu_utilization",
            None
        )

        # ----------------------------------
        # Rule 1: Underutilized VM
        # ----------------------------------

        if (
            utilization is not None
            and utilization < 25
        ):

            recommendations.append({

                "priority": "HIGH",

                "type": "RIGHTSIZE",

                "saving_reason":
                "CPU utilization below 25%",

                "expected_impact":
                "Reduce VM size by 1 level"
            })

        # ----------------------------------
        # Rule 2: Moderately utilized VM
        # ----------------------------------

        elif (
            utilization is not None
            and utilization < 50
        ):

            recommendations.append({

                "priority": "MEDIUM",

                "type": "AUTO_SCALING",

                "saving_reason":
                "Low average utilization",

                "expected_impact":
                "Enable autoscaling"
            })

        # ----------------------------------
        # Rule 3: High carbon workload
        # ----------------------------------

        if carbon > 50:

            recommendations.append({

                "priority": "HIGH",

                "type": "CARBON_REDUCTION",

                "saving_reason":
                f"Carbon footprint {carbon:.2f} kg CO2e",

                "expected_impact":
                "Review workload architecture"
            })

        # ----------------------------------
        # Rule 4: Region migration
        # ----------------------------------

        current_region = request.region

        greener_region = (
            self._find_greener_region(
                current_region
            )
        )

        if greener_region:

            recommendations.append({

                "priority": "HIGH",

                "type": "REGION_MIGRATION",

                "saving_reason":
                f"{current_region} has higher carbon intensity",

                "expected_impact":
                f"Migrate to {greener_region}"
            })

        # ----------------------------------
        # Rule 5: Storage Optimization
        # ----------------------------------

        if request.resource == "storage":

            if request.usage > 1000:

                recommendations.append({

                    "priority": "MEDIUM",

                    "type": "STORAGE_TIERING",

                    "saving_reason":
                    "Large storage footprint",

                    "expected_impact":
                    "Move cold data to archive tier"
                })

        return recommendations

    def _find_greener_region(
        self,
        current_region
    ):

        regions = self.resources_metadata[
            "regions"
        ]

        current_intensity = (
            regions[current_region]
            ["carbon_intensity"]
        )

        best_region = None

        lowest_intensity = (
            current_intensity
        )

        for region, details in regions.items():

            if (
                details["carbon_intensity"]
                < lowest_intensity
            ):

                lowest_intensity = (
                    details["carbon_intensity"]
                )

                best_region = region

        return best_region