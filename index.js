const { Client, Events, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const { token, guildId, userId } = process.env;
const rDay = new Date(2023, 4, 10);

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

  const daysRemaining = Math.ceil((rDay - new Date()) / (24 * 60 * 60 * 1000));

  const replacement =
    daysRemaining > 0 ? `${daysRemaining} days left` : "Free?";
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

cron.schedule("0 0 * * *", updateNickname);
