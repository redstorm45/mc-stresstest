FROM node:14-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN apk add bash \
  && npm install

COPY entrypoint.sh /app/
ENTRYPOINT ["bash", "entrypoint.sh"]
