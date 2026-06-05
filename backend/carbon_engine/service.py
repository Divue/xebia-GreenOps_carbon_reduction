from carbon_engine.loaders.resource_loader import ResourceLoader
from carbon_engine.calculators.carbon_calculator import CarbonCalculator


class CarbonService:

    def __init__(
        self,
        metadata_path
    ):

        self.loader = ResourceLoader(
            metadata_path
        )

    def calculate(
        self,
        request
    ):

        resource = (
            self.loader.get_resource(
                request.resource,
                request.resource_type
            )
        )

        region = (
            self.loader.get_region(
                request.region
            )
        )

        carbon_intensity = (
            region["carbon_intensity"]
        )

        energy = 0

        # ----------------------------------
        # VMs
        # ----------------------------------

        if request.resource in [

            "aws_ec2",
            "azure_vm",
            "database",
            "kubernetes"

        ]:

            energy = (
                CarbonCalculator.calculate_vm_energy(

                    baseline_power_watts=
                    resource[
                        "baseline_power_watts"
                    ],

                    max_power_watts=
                    resource[
                        "max_power_watts"
                    ],

                    cpu_utilization=
                    request.cpu_utilization,

                    runtime_hours=
                    request.usage
                )
            )

        # ----------------------------------
        # Storage
        # ----------------------------------

        elif request.resource == "storage":

            energy = (
                CarbonCalculator
                .calculate_storage_energy(

                    factor=
                    resource[
                        "energy_factor_kwh_per_gb_month"
                    ],

                    storage_gb=
                    request.usage
                )
            )

        # ----------------------------------
        # Network
        # ----------------------------------

        elif request.resource == "network":

            energy = (
                CarbonCalculator
                .calculate_network_energy(

                    factor=
                    resource[
                        "energy_factor_kwh_per_gb"
                    ],

                    transfer_gb=
                    request.usage
                )
            )

        # ----------------------------------
        # Lambda / Functions
        # ----------------------------------

        elif request.resource in [

            "aws_lambda",
            "azure_functions"

        ]:

            energy = (
                CarbonCalculator
                .calculate_request_energy(

                    factor=
                    resource[
                        "energy_factor_kwh_per_1m_invocations"
                    ],

                    requests_count=
                    request.requests_count
                )
            )

        # ----------------------------------
        # DynamoDB / Cosmos
        # ----------------------------------

        elif (

            "energy_factor_kwh_per_million_requests"

            in resource

        ):

            energy = (
                CarbonCalculator
                .calculate_request_energy(

                    factor=
                    resource[
                        "energy_factor_kwh_per_million_requests"
                    ],

                    requests_count=
                    request.requests_count
                )
            )

        else:

            raise ValueError(
                f"Unsupported resource "
                f"{request.resource}"
            )

        carbon = (
            CarbonCalculator
            .calculate_carbon(
                energy,
                carbon_intensity
            )
        )

        return {

            "resource":
            request.resource,

            "resource_type":
            request.resource_type,

            "region":
            request.region,

            "energy_kwh":
            round(energy, 4),

            "carbon_intensity":
            carbon_intensity,

            "carbon_generated_kg_co2e":
            round(carbon, 4)
        }