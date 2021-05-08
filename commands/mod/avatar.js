     const Discord = require('discord.js');
require("./ExtendedMessage");
        module.exports = {
	name: 'avatar',
	description: 'Ping!',
	execute(message, args) {
	              if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb=new Discord.MessageEmbed()
              .setImage(member.displayAvatarURL({ dynamic: true }) + "?size=2048")
            .setTitle(member.username+"'s Avatar")
            .setTimestamp()
            .setFooter(`requested by ${message.author.username}`, `${message.author.avatarURL()}`)
            message.inlineReply(emb)
            
        }
        else{
           message.inlineReply("Sorry none found with that name")

        }
        }else{
            const emb=new Discord.MessageEmbed()
              .setImage(message.author.displayAvatarURL({ dynamic: true }) + "?size=2048")
            .setTitle("Your Avatar !")
            .setColor("#ea80b9")
            .setTimestamp()
            .setFooter(`requested by ${message.author.username}`, `${message.author.avatarURL()}`)
            message.inlineReply(emb)
        }
	},
};