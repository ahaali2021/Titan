  const Discord = require('discord.js');
require("./ExtendedMessage");
    module.exports = {
	name: 'kick',
	description: 'Ping!',
	execute(message, args) {
		     if(message.member.hasPermission("ADMINISTRATOR")) {

                const user = message.mentions.users.first();
                if (user) {
                  const member = message.guild.member(user);
                  if (member) {
                    member
                      .kick({
                        reason: 'They were bad!',
                      })
                      .then(() => {
                        message.inlineReply(`${user.tag} Succsesfully Kicked from the server ! `);
                      })
                      .catch(err => {
                        message.inlineReply('I cant kick This user !  ');
                        console.error(err);
                      });
                  } else {
                    message.inlineReply("I cant find that User you mentioned ");
                  }
                } else {
                  message.inlineReply("you need to mentioned target user ! ");
                               if(!message.member.hasPermission("ADMINISTRATOR")) {
message.inlineReply("You Dont Have Permition to Ban A User")
                }
              }
                }else {
      message.inlineReply("You need Administrator premission !");
    }
	},
};