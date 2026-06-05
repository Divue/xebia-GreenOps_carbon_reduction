from fastapi import FastAPI
from app.routes.dashboard import router as dashboard_router

app = FastAPI(title="GreenOps API")

app.include_router(dashboard_router)

@app.get("/")
def root():
    return {"message": "GreenOps Backend Running"}

@app.get("/health")
def health():
    return {"status": "healthy"}