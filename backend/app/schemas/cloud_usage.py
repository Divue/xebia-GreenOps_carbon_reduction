from pydantic import BaseModel

class CloudUsage(BaseModel):
    provider: str
    region: str
    vmHours: int
    storageGB: int
    networkGB: int