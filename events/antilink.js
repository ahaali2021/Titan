const db = require('quick.db')
module.exports = {
	name: 'message',
	once: false,
	execute(message,client) {
    let antilink = db.get(`antilink_${message.guild.id}`)
    if(antilink === 'on'){
      if(!message.member.hasPermission("MANAGE_CHANNELS")){
		 if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\n**Invite links are not allowed in this Server!**').then(msg => msg.delete({timeout: 3000})));
        }
      }
    }
	},
};
