module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 10,
	aliases: ['pong'],
	usage: ' ',
	guildOnly: false,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
