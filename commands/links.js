const Command = require("../structures/command.js");
const {EmbedBuilder} = require('discord.js');
const config = require("../config");

module.exports = new Command({
        name: "links",
        aliases: ["link"],
        description: "Displays associated links",
        permission: "SEND_MESSAGES",
        async run(message, args, client, slash) {
                const embed = new EmbedBuilder();
                embed.setColor('#44b868');
                embed.setDescription(`**Links:**\n
                Want to contribute?
                https://github.com/GhostieSpook/Mi-a-Music
                Want to invite? Ask GhostieSpook#0690
                Fork of nizewns Dodong music bot.
                Online Web Player
                ${process.env.WEBPLAYER || config.webplayer}?guildID=${message.guild.id}\n`);
                
                return message.reply({embeds: [embed]});
        }
});
