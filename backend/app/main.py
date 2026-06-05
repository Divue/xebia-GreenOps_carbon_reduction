from fastapi import FastAPI

app = FastAPI(title="GreenOps API")

@app.get("/")
def root():
    return {"message": "GreenOps Backend Running"}

@app.get("/health")
def health():
    return {"status": "healthy"}