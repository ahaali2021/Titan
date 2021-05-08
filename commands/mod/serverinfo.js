const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};
const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
const moment = require('moment');
const discord = require('discord.js');
require("./ExtendedMessage");
const emoji = require('../../emojis.json')
module.exports = {
	name: 'serverinfo',
	description: 'Ping!',
	execute(message, args) {
          const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
    const embed = new discord.MessageEmbed()
    .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
    .addField(`Members`,`> ${emoji.member} | All Members : ${message.guild.memberCount} \n> ${emoji.bots} | Bots : ${members.filter(member => member.user.bot).size}\n> ${emoji.online} | Online : ${members.filter(member => member.presence.status === 'online').size} \n> ${emoji.dnd} | DND : ${members.filter(member => member.presence.status === 'dnd').size} \n> ${emoji.idle} | IDLE : ${members.filter(member => member.presence.status === 'idle').size} \n> ${emoji.offline} | Offline : ${members.filter(member => member.presence.status === 'offline').size} `)
    .addField(`Channels`,`> ${emoji.chat} | Text : ${channels.filter(channel => channel.type === 'text').size}\n> ${emoji.voice} | Voice : ${channels.filter(channel => channel.type === 'voice').size}`)
    .addField(`Owner`,`> ${emoji.ownership} | Ownership : ${message.guild.owner}`)
    .addField(`Boosts`,`> ${emoji.boosts} | Server Boosts : ${message.guild.premiumSubscriptionCount || '0'}\n> ${emoji.boosts} | Boost Level : ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`)
    .addField(`Roles`,`> ${emoji.roles} | Role count : ${roles.length}`)
    .addField(`Emoji`,`> 🥨 | Emojis : ${emojis.size}\n> 🥨 | Normal : ${emojis.filter(emoji => emoji.animated).size}\n> 🥨 | Animated : ${emojis.filter(emoji => !emoji.animated).size}`)
    .addField(`Region`,`> :flag_ac: | Server Region : ${regions[message.guild.region]}`)
    .addField(`Time Created`,`> ${emoji.time} | Time Created : ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`)
    .addField(`verificationLevel`,`> Verification Level : ${verificationLevels[message.guild.verificationLevel]}`)
    .setThumbnail(message.guild.iconURL())
    message.inlineReply(embed)
	},
};