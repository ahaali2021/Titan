
        module.exports = {
	name: 'eval',
	description: 'help menu of bot',
	async execute(message, args) {
    if(message.author.id !== "831486778212089856") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
        }
  }