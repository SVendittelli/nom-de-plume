FROM node:18-alpine@sha256:751a2934c5d784d1d4b3feb189bf1dd62bf08918cf6bb3e9f06eead6df71a0f3 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:c73d0509171d06c166a5e4ffb0b6a547623e5666f2764651f7dff7a3a97f2678 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
