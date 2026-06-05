class CarbonCalculator:

    @staticmethod
    def calculate_vm_energy(
        baseline_power_watts,
        max_power_watts,
        cpu_utilization,
        runtime_hours
    ):

        utilization_ratio = cpu_utilization / 100

        avg_power = (
            baseline_power_watts
            +
            (
                max_power_watts
                - baseline_power_watts
            )
            * utilization_ratio
        )

        energy_kwh = (
            avg_power
            * runtime_hours
        ) / 1000

        return energy_kwh

    @staticmethod
    def calculate_storage_energy(
        factor,
        storage_gb
    ):
        return factor * storage_gb

    @staticmethod
    def calculate_network_energy(
        factor,
        transfer_gb
    ):
        return factor * transfer_gb

    @staticmethod
    def calculate_carbon(
        energy_kwh,
        carbon_intensity
    ):
        return energy_kwh * carbon_intensity