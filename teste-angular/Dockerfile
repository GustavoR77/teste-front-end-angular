FROM node:latest as angular
WORKDIR //app
COPY package*.json /app
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/ /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t teste-angular .
# docker run -p 8081:80 teste-angular
# docker compose -f "docker-compose.yml" up -d --build
