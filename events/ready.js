module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`[API] ${client.user.tag} IS NOW ONLINE BE MOLA !`);
	},
};
