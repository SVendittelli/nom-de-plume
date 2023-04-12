// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const rDay = new Date(2023, 4, 10);

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.PresenceUpdate, async (_oldPresence, newPresence) => {
  const clientMember = await newPresence.guild.members.fetch({
    user: client.user,
    force: true,
  });

  if (
    clientMember.roles.highest.comparePositionTo(
      newPresence.member.roles.highest
    ) < 0
  ) {
    return console.error("Client cannot change the user's nickname");
  }

  if (newPresence.user.tag === "Vendittelli#9785") {
    const daysRemaining = Math.ceil(
      (rDay - new Date()) / (24 * 60 * 60 * 1000)
    );

    const me = await newPresence.guild.members.fetch({
      user: newPresence.user,
      force: true,
    });

    const replacement =
      daysRemaining > 0 ? `${daysRemaining} days left` : "Free?";
    const newNickname = `${me.nickname}`.replace(/\[.*\]/, `[${replacement}]`);

    console.log(
      `Replacing Vendittelli#9785 nickname: ${me.nickname} -> ${newNickname}`
    );
    await me.setNickname(newNickname);
  }
});

// Log in to Discord with your client's token
client.login(token);
