const { Client, Events, GatewayIntentBits } = require('discord.js');
const { DateTime } = require('luxon');
const cron = require('node-cron');

const durationUntil = require('./durationUntil');

require('dotenv').config();
const { token, guildId, userId } = process.env;

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  updateNickname();
});

const updateNickname = async () => {
  const guild = await client.guilds.fetch(guildId);

  const clientMember = await guild.members.fetchMe();
  const memberToChange = await guild.members.fetch({
    user: userId,
    force: true,
  });

  if (
    clientMember.roles.highest.comparePositionTo(memberToChange.roles.highest) <
    0
  ) {
    return console.error("Client cannot change the user's nickname");
  }

  const today = DateTime.now().setZone('Europe/London').startOf('day');
  const end = DateTime.local(2023, 6, 2, { zone: 'Europe/London' });

  const { duration, humanReadableDuration } = durationUntil(today, end);

  const replacement =
    duration == 0
      ? 'Free today?'
      : duration > 0
      ? `${humanReadableDuration} left`
      : `Free? ${humanReadableDuration} waiting`;

  const newNickname = `${memberToChange.nickname}`.replace(
    /\[.*\]/,
    `[${replacement}]`
  );

  console.log(
    `Replacing ${memberToChange.user.username}'s nickname: ${memberToChange.nickname} -> ${newNickname}`
  );
  await memberToChange.setNickname(newNickname);
};

// Log in to Discord with your client's token
client.login(token);

cron.schedule('0 23 * * *', updateNickname);
