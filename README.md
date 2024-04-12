# ai_agent

The **ai_agent** project is a local AI support assistant designed for IT/helpdesk use cases.

It runs entirely on your own infrastructure and is built from four main components:

1. **Ollama local LLM** – runs the language model on your machine (no 3rd-party APIs).
2. **ai-support-api** – FastAPI backend that sends prompts to the LLM and returns responses.
3. **ai-support-ui** – React-based web UI for chatting with the agent.
4. **kb-embedder** – tooling to process IT documentation and prepare it for retrieval-augmented answers (RAG).

You typically deploy this on your **Windows AI server** or a dedicated Linux VM inside your lab.

---

## 1. Architecture Overview

High-level data flow:

```text
Browser (user) → ai-support-ui (React)
               → ai-support-api (FastAPI)
               → Ollama (LLM server)
               → ai-support-api → ai-support-ui → user
                          ↳ (optional) kb-embedder / vector DB
