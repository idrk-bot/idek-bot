const discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Embed = require("../Embed");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("user_info")
    .setDescription("shows user info"),
    /**
     * 
     * @param {discord.CommandInteraction} interaction 
     * @param {discord.Client} client 
     */
    async execute(interaction, client){
        await interaction.reply({
            embeds: new Embed()
            .setTitle(`${interaction.user.username}`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setDescription(`This is your pfp :O`)
            .build()
        });
    }
}