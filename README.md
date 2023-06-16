# Nom de Plume

A discord bot to automatically update a user's nickname from a command or based upon the date/time of day.

## Current features

Using the `/tarot [card name]` command, a user can update their nickname to include an emoji of a tarot card based upon the name of the card.

At midnight, the card will reset to '❓' if required.

### Major Arcana

```txt
0. The Fool: 🃏
I. The Magician: 🧙
II. The High Priestess: 🔮
III. The Empress: 🗽
IV. The Emperor: 👑
V. The Hierophant: 🎓
VI. The Lovers: 💞
VII. The Chariot: 🛒
VIII. Strength: 💪
IX. The Hermit: ⛺️
X. Wheel of Fortune: 🛞
XI. Justice: ⚖️
XII. The Hanged Man: 🪢
XIII. Death: 💀
XIV. Temperance: 🍵
XV. The Devil: 😈
XVI. The Tower: 💥
XVII. The Star: ✨
XVIII. The Moon: 🌝
XIX. The Sun: 🌞
XX. Judgment: 📯
XXI. The World: 🌍
```

### Minor arcana

Suits:

```txt
Cups: 🏆
Wands: 🪄
Swords: ⚔️
Pentacles: 🪙
```

Values:

```txt
Ace: 🅰️
1: 1
2: 2
3: 3
4: 4
5: 5
6: 6
7: 7
8: 8
9: 9
10: 🔟
Page: 🤴
Knight: 🛡️
Queen: 👸
King: 🫅
```

## Dependencies

- Node v18+
- Docker

## Building

Create a file called `.env` containing:

```env
token=<bot token>
appId=<id of the discord app the bot belongs to>
guildId=<server id>
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

## Tests

The tests can be run using:

```sh
npm test
```
