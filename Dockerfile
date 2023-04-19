FROM node:18-alpine@sha256:ca5d399560a9d239cbfa28eec00417f1505e5e108f3ec6938d230767eaa81f61 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:2de42a3372258144025566ebfbed7a64eeeed4a3dc75bd212ec5301daa2b0625 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
