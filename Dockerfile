FROM node:alpine

WORKDIR /app

ADD . .

ENTRYPOINT [ "node", "index.js" ]
