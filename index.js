const Discord = require("discord.js");
const config = require("./config.json");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client({
    intents: ["GUILDS"],
    partials: ["GUILD_MEMBER", "USER"]
});

client.on("ready", () => {
    console.log("bot is ready i think")
});

client.commands = new Discord.Collection();

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '915718198177988698';
const guildId = '937520924658397184';

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.on("interactionCreate", async interaction => {
    if(!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName)

    try {
        await command.execute(interaction, client);
    } catch(e){
        console.log(e);
    }
});

client.login(config.token)