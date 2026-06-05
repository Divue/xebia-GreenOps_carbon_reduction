from dataclasses import dataclass


@dataclass
class ResourceRequest:

    resource: str
    resource_type: str
    usage: float
    region: str
    cpu_utilization: float = 50.0