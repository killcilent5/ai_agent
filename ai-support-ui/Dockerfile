
FROM node:20-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY src ./src
RUN npx --yes vite build || true

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
