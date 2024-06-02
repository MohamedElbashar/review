#install wkhtmltopdf from docher hub
FROM surnet/alpine-wkhtmltopdf:3.16.2-0.12.6-full as wkhtmltopdf

FROM node:14.16.0 AS BUILD_IMAGE

WORKDIR /opt/api

COPY package.json .
RUN npm config set registry https://nexus.neutrinos.co/repository/neutrinos-store-registry/
RUN npm install

COPY . .
RUN npx tsc -p ./tsconfig.json

EXPOSE 8080

FROM node:14.16.0-alpine

WORKDIR /home/api

COPY --from=BUILD_IMAGE /opt/api .
#dependency of wkhtmltopdf
RUN apk add --no-cache \
    libstdc++ \
    libx11 \
    libxrender \
    libxext \
    libssl1.1 \
    ca-certificates \
    fontconfig \
    freetype \
    ttf-dejavu \
    ttf-droid \
    ttf-freefont \
    ttf-liberation \
    && apk add --no-cache --virtual .build-deps \
    msttcorefonts-installer \
    && update-ms-fonts \
    && fc-cache -f \
    && rm -rf /tmp/* \
    && apk del .build-deps

# Copy wkhtmltopdf files from docker-wkhtmltopdf image
COPY --from=wkhtmltopdf /bin/wkhtmltopdf /usr/bin/wkhtmltopdf

CMD ["npm", "run", "node-prod-trace"]