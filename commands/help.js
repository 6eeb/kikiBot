const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Default Prefix", `k!`)
        .addField("Moderation", `**purge:** Deletes any amount of messages 1-100.\n**ban:** Bans a user that you mention.\n**kick:** Kicks a user that you mention.\n**warn:** Warns a user that you mention.`)
        .addBlankField()
        .addField("Fun", `**gay:** Tells you how gay you are.\n**hug:** Hugs someone.\n**kiss:** Kisses someone.\n**cuddle:** Cuddles someone.`)
        .addBlankField()
        .addField("General", `**userinfo:** Shows info about a user.\n**serverinfo:** Shows info about the server\n**help:** Shows this message.`)
        .setDescription(`[** | Support Server | **](https://discord.gg/jSfk822)`, `[** | GitHub | **](https://github.com/RyanFizz/kikiBot)`)
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor(0xff4242);

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
