FROM node:18.20.3-alpine@sha256:e37da457874383fa9217067867ec85fe8fe59f0bfa351ec9752a95438680056e as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:c3627dd28e9e031c6b562eb7cb77c324b9c4635a1c05eaf8e89d2eaa364fa6f0 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
