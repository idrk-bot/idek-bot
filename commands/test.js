const discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test command"),
    async execute(interaction, client){
        await interaction.reply("test or something idek")
    }
}