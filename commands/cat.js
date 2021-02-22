const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'cat',
	description: 'Have a nice picture of a cat.',
	aliases: ['meow'],
	usage: ' ',
	guildOnly: false,
	async execute(message, args) {
    const res = await fetch('https://nekos.life/api/v2/img/meow').then(info => info.json()).catch(err => {
		// An error occured when looking for image
		console.log(err);
	});

	// send image
	const embed = new MessageEmbed()
    .setTitle("**:cat:  Meow! :cat:**")
		.setColor("RANDOM")
		.setImage(res.url);
	message.channel.send(embed);

	},
};
