# Nom de Plume

A discord bot to change a user's nickname automatically.

## Dependencies

- Node v16+
- Docker

## Building

Create a file called `config.json` containing:

```json
{
  "token": "<bot token>",
  "guildId": "<server id>",
  "userId": "<user id to update>"
}
```

```sh
npm install
docker build -t nom-de-plume .
```

## Run

This will run the bot in production mode, restarting it automatically.

```sh
docker run --name nom-de-plume --restart=always -d nom-de-plume
```

To run the bot in development mode, use the following command:

```sh
npm start
```
