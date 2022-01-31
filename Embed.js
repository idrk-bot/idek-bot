const { MessageEmbed } = require("discord.js");
const { Color } = require("./config");

const Embed = module.exports = class Embed extends MessageEmbed {
    constructor(){
        super()
        
        this.setColorAuto()
    }

    setColorAuto(){
        this.color = Color
    }

    build() {
        return [this];
    }
};