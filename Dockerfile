FROM nginx:alpine
copy abogados-front /usr/share/nginx/html
COPY config-nginx.conf /etc/nginx/conf.d/default.conf