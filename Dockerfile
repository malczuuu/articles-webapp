FROM nginx:1.21.3-alpine

WORKDIR /usr/share/nginx/html

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/articles-webapp/. ./
