
from fastapi import FastAPI
import requests, os

app = FastAPI()
OLLAMA = os.getenv("OLLAMA_HOST", "http://localhost:11434")

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/chat")
def chat(body: dict):
    prompt = body.get("message", "")
    r = requests.post(
        OLLAMA + "/api/generate",
        json={"model": "llama3:8b", "prompt": prompt},
        timeout=120,
    )
    return r.json()
