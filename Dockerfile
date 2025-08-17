FROM node:18.20.8-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:c3627dd28e9e031c6b562eb7cb77c324b9c4635a1c05eaf8e89d2eaa364fa6f0 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
