 const Discord = require("discord.js")
 require('../mod/ExtendedMessage')
const db = require("quick.db")
 module.exports = {
	name: 'setwelcome',
	description: 'help menu of bot',
   execute(message, args) {
      if(message.member.hasPermission("ADMINISTRATOR")) {
   if(!args[0]){
     const embed = new Discord.MessageEmbed()
     .addField('?setwelcome channel [channel]','set welcome channel <:hmmm:836545340390768671> ')
     .addField('?setwelcome message [message]','set welcome message <:hmmm:836545340390768671> ')
     message.inlineReply('**?setwelcome command** <a:WParrot:836545823449940008> ',embed)
   } else if(args[0]==='channel'){
     let channel = message.mentions.channels.first() 
    if(!channel) { 
      return message.channel.send("Please Mention the channel first <:7971pepewealthy:840312043823431750>")
    }
    db.set(`welchannel_${message.guild.id}`, channel.id)
    message.channel.send(`Welcome Channel is seted as ${channel} <:GhooryPoggies:840312157123903508>`) 
    channel.send(`This channel was setted for welcome stuff !<:wtf:839638861181222912> `)
   }else if(args[0]==='message'){
     let welmessage = message.content.split(`?setwelcome ${args[0]} `).join("");
     db.set(`welmsg_${message.guild.id}`, welmessage)
     message.inlineReply(`The message you setted to your welcome message is **${welmessage}**   <:wtf:839638861181222912> `)
   
   }else{
     message.inlineReply('You can use only **?setwelcome [channel / message]**  <:hmmm:836545340390768671> ')
   }
      } else{
        message.inlineReply('You dont have premission <:GhooryPoggies:803241218368471040>')
      }
  },
 }