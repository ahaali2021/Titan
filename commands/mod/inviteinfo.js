
  const Discord = require('discord.js');
require("./ExtendedMessage");
    module.exports = {
	name: 'inviteinfo',
	description: 'info of invites',
	execute(message, args) {
                       var user = message.author;
                
                      message.guild.fetchInvites()
                      .then
                
                      (invites =>
                          {
                              const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                              var userInviteCount = 0;
                              for(var i=0; i < userInvites.length; i++)
                              {
                                  var invite = userInvites[i];
                                  userInviteCount += invite['uses'];
                              }
            const emb=new Discord.MessageEmbed()
                                 		   .setFooter(`requsted by ${message.author.username}`,message.author.avatarURL())
                                 .setTitle(`You Have ${userInviteCount} Invite ! ✨`)
                                   message.inlineReply(emb);
                          }
                      )
  }
    }