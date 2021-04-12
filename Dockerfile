FROM node:14-alpine

COPY package.json .
RUN apk add bash \
  && npm install \
  && mkdir /app

WORKDIR /app
COPY entrypoint.sh /app/
ENTRYPOINT ["bash", "entrypoint.sh"]
