const { SlashCommandBuilder } = require('discord.js');
const cron = require('node-cron');

const { cardNameToEmoji, appendReversed } = require('../../tarot');
const { replaceOrAppendBrackets } = require('../../nickname');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tarot')
    .setDescription(
      "Updates the user's nickname with emojis of the given tarot card."
    )
    .addStringOption((option) =>
      option
        .setName('card')
        .setDescription('The name of the card')
        .setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName('reversed')
        .setDescription('Was the card reversed? (Default False')
        .setRequired(false)
    )
    .addBooleanOption((option) =>
      option
        .setName('daily')
        .setDescription('Should this be reset at midnight? (Default True)')
        .setRequired(false)
    ),
  async execute(interaction) {
    const card = interaction.options.getString('card');
    const reversed = interaction.options.getBoolean('reversed') ?? false;
    const daily = interaction.options.getBoolean('daily') ?? true;

    const newNickname = replaceOrAppendBrackets(
      interaction.member.nickname,
      appendReversed(cardNameToEmoji(card), reversed)
    );

    if (daily) {
      cron.schedule('0 23 * * *', async () =>
        interaction.member.setNickname(interaction.member.nickname)
      );
    }

    interaction.member.setNickname(newNickname);

    return interaction.reply({
      content:
        `Updated to your nickname to: "${newNickname}".` +
        (daily ? ' This will reset at midnight.' : ''),
      ephemeral: true,
    });
  },
};
