module.exports = {
	name: 'mute',
	description: 'Ping!',
	execute(message, args) {
		 if (!message.member.hasPermission("MUTE_MEMBERS") && !ownerID .includes(message.author.id)) return message.channel.send("**You Dont Have The Permissions To Mute Users! - [MUTE_MEMBERS]**");
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        if(!member) return message.channel.send("Unable to find the mentioned user in this guild.")

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No Reason Provided"


        try {
            member.voice.setMute(true, reason);
            message.channel.send("Success ✅ : Member Muted")
        } 
        
        catch(error) {
            console.log(error)
            message.channel.send("Oops! An unknown error occured. Please try again later.")
        }
	},
};