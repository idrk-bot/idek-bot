const discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Embed = require("../Embed");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test command"),
    async execute(interaction, client){
        await interaction.reply({
            embeds: new Embed()
            .setDescription(`Test or something idek idrk.`)
            .build()
        });
    }
}