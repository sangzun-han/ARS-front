server {
        location /{
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "Upgrade";
                proxy_set_header Host $host;
        }

        location /api {
                proxy_pass http://localhost:8000/api;
        }

        listen 443 ssl;
        ssl_certificate /etc/letsencrypt/live/i8b305.p.ssafy.io/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/i8b305.p.ssafy.io/privkey.pem;
    # include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    # ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = i8b305.p.ssafy.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

        listen 80;
        server_name i8b305.p.ssafy.io;
    return 404; # managed by Certbot
}

