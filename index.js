
const fs = require('fs');
const Discord = require('discord.js');

const { token } = require('./config.json');
const prefix = "?";
const db = require('quick.db');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('guildMemberAdd',member=>{
  		let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  if(chx === null) { //check if var have value or not
    return;
  }
  let welmessage = db.get(`welmsg_${member.guild.id}`);
 if(welmessage === null) { //check if var have value or not
   welmessage = `Hey ${member}!\nWelcome to ${member.guild} Server`
  }
  let wembed = new Discord.MessageEmbed() //define embed
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor("#ff2050")
  .setThumbnail(member.user.avatarURL({dynamic:true}))
  .setDescription(welmessage);
  client.channels.cache.get(chx).send(wembed)
})
client.login(token);