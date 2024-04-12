
#!/bin/bash
docker compose up -d
docker exec -it $(docker ps -qf name=ollama) ollama pull llama3:8b
