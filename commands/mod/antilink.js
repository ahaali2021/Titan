const Discord = require('discord.js');
require("./ExtendedMessage");
const db = require('quick.db')

module.exports = {
	name: 'antilink',
	description: 'Ping!',
	execute(message, args) {
  if(message.member.hasPermission("ADMINISTRATOR")){
		if(args[0] === 'on'){
            db.set(`antilink_${message.guild.id}`,'on')
            message.inlineReply(`anti link is now **ON**`)
        }else if(args[0] === 'off'){
            db.set(`antilink_${message.guild.id}`,'off')
            message.inlineReply(`anti link is now **OFF**`)
        }else{
            message.inlineReply(`Just Use **[ON/OFF]**`)
        }
    }else{
      message.inlineReply('You Dont have `ADMINSTRATOR` Premission !')
    }
	},
};