from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.dashboard import router as dashboard_router

app = FastAPI(title="GreenOps API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard_router)

@app.get("/")
def root():
    return {"message": "GreenOps Backend Running"}

@app.get("/health")
def health():
    return {"status": "healthy"}