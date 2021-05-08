
  const Discord = require('discord.js');
require("./ExtendedMessage");
    module.exports = {
	name: 'ban',
	description: 'Ping!',
	execute(message, args) {
	                if(message.member.hasPermission("ADMINISTRATOR")) {

                const user = message.mentions.users.first();
                if (user) {
                  // Now we get the member from the user
                  const member = message.guild.member(user);
                  if (member) {
                    member
                      .ban({
                        reason: 'They were bad!',
                      })
                      .then(() => {
                        message.inlineReply(`${user.tag} Succsesfully banned from the server ! `);
                      })
                      .catch(err => {
                       message.inlineReply('I cant ban This user !  ');
                        console.error(err);
                      });
                  } else {
                    message.inlineReply("I cant find that User you mentioned  ");
                  }
                } else {
                  message.inlineReply("you need to mentioned target user !");
                }
              } else {
      message.channel.send("You need Administrator premission !");
    }
	},
};