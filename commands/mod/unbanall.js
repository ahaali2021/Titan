const Discord = require('discord.js');
require("./ExtendedMessage");
module.exports = {
	name: 'unbanall',
	description: 'Ping!',
	 execute(message, args) {
      if (message.member.hasPermission("ADMINISTRATOR")) {
                message.guild.fetchBans().then(bans => {
                    if (bans.size == 0) {message.reply("There are no banned users."); throw "No members to unban."};
                    bans.forEach(ban => {
                        message.guild.members.unban(ban.user.id);
                    });
                }).then(() => message.reply("Unbanned all users.")).catch(e => console.log(e))
            } else {message.reply("You do not have enough permissions for this command.")}
	},
};