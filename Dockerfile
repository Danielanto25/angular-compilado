FROM nginx:alpine
COPY abogados-front /usr/share/nginx/html
COPY config-nginx.conf /etc/nginx/conf.d/default.conf