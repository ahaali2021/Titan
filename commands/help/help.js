const Discord = require('discord.js');
require("./ExtendedMessage");
const emoji = require('../../emojis.json')
module.exports = {
	name: 'help',
	description: 'help menu of bot',
	execute(message, args) {
		if(!args[0]){
        const embed = new Discord.MessageEmbed()
     .addField(`?help emoji ${emoji.command}`,'`For the emoji commands`')
	 .addField(`?help welcomer ${emoji.command}`,'`For the welcomer commands`')
	 .addField(`?help mod ${emoji.command}`,'`Moderation commands`')
   .addField(`?help music ${emoji.command}`,'`Music commands`')
	 .addField(`?help premium ${emoji.command}`,'`premium stuff `')
        .setFooter(`requsted by ${message.author.username}`,message.author.avatarURL())
		message.inlineReply(`**Help menu of Wimus Bot !** ${emoji.parvane}`, embed);
	} else if(args[0] === 'emoji'){
		const embed = new Discord.MessageEmbed()
		.addField(`?addemoji [other server emoji ] ${emoji.command}`,'`Add emojis from other server`')
		.addField(`?serveremojis ${emoji.command}`,'`get all of emojis`')
		   .setFooter(`requsted by ${message.author.username}`,message.author.avatarURL())
		   message.inlineReply('**Help menu [`Emoji`] of Wimus Bot !**'+` ${emoji.parvane}`, embed);
	} else if(args[0] === 'welcomer'){
		const embed = new Discord.MessageEmbed()
		.addField(`?setwelcomemessage [message]${emoji.command}`,'`Set welcome message`')
		.addField(`?setwelcomechannel [channel] ${emoji.command}`,'`Set welcome channel`')
		.addField(`?setwelcomerole [role] ${emoji.command}`,'`Set AutoRole`')
		   .setFooter(`requsted by ${message.author.username}`,message.author.avatarURL())
		   message.inlineReply('**Help menu [`welcomer`] of Wimus Bot !**'+` ${emoji.parvane}`, embed);
	}	else if(args[0] === 'mod'){
		const embed = new Discord.MessageEmbed()
		.addField(`?kick [user]${emoji.command}`,'`kick mentioned member`')
		.addField(`?ban [user] ${emoji.command}`,'`ban mentioned member`')
    	.addField(`?unbanall ${emoji.command}`,'`unban all ban members`')
		.addField(`?userinfo [user] ${emoji.command}`,'`info of mentioned user`')
		.addField(`?serverinfo ${emoji.command}`,'`info of server`')
    .addField(`?avatar [user] ${emoji.command}`,'`show user avatar`')
    .addField(`?clear [1 -> 100] ${emoji.command}`,'`clear some of your messages`')
		.addField(`?mute [user] ${emoji.command}`,'`mute mentioned member`')
		.addField(`?unmute [user] ${emoji.command}`,'`unmute mentioned member`')
		.addField(`?deafen [user] ${emoji.command}`,'`deafen mentioned member`')
		.addField(`?undeafen [user] ${emoji.command}`,'`undeafen mentioned member`')
		.addField(`?role all [role] ${emoji.command}`,'`give all members role`')
		.addField(`?role humans [role] ${emoji.command}`,'`give all users role`')
		.addField(`?role bots [role] ${emoji.command}`,'`give all bots role`')
		.addField(`?antilink [on/off] ${emoji.command}`,'`give all bots role`')
		   .setFooter(`requsted by ${message.author.username}`,message.author.avatarURL())
		   message.inlineReply('**Help menu [`moderation`] of Wimus Bot !**'+` ${emoji.parvane}`, embed);
	}	else if(args[0] === 'premium'){
		const embed = new Discord.MessageEmbed()
		.addField(`?premium add [user]${emoji.command}`,'[`Developer Only`]')
		.addField(`?premium check ${emoji.command}`,'`Show your premium status`')
		   .setFooter(`requsted by ${message.author.username}`,message.author.avatarURL())
		   message.inlineReply('**Help menu [`premium`] of Wimus Bot !**'+` ${emoji.parvane}`, embed);
	}	else if(args[0] === 'music'){		
    	const embed = new Discord.MessageEmbed()
		.addField(`?play [music/link]${emoji.command}`,'playing music')
		.addField(`?skip ${emoji.command}`,'`Skip current music`')
    .addField(`?stop ${emoji.command}`,'`stop current music`')
    .addField(`?resume ${emoji.command}`,'`resume current music`')
    .addField(`?filters ${emoji.command}`,'`filters current music`')
    .addField(`?volume [1 - 100] ${emoji.command}`,'`set volume of current music`')
    .addField(`?repeat ${emoji.command}`,'`repeat current music`')
    .addField(`?pause ${emoji.command}`,'`pause current music`')
    .addField(`?queue ${emoji.command}`,'`queue of your current music`')
		   .setFooter(`requsted by ${message.author.username}`,message.author.avatarURL())
		   message.inlineReply('**Help menu [`premium`] of Wimus Bot !**'+` ${emoji.parvane}`, embed);
  }
	},
};