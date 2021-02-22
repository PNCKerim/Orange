const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'twitter',
	description: 'Create a fake twitter tweet.',
	aliases: ['tweet'],
  cooldown: 5,
	usage: ' ',
	guildOnly: false,
	async execute(message, args) {

    	let text = args.join(' ');
    	text = text.replace(/<@.?[0-9]*?>/g, '');


    	if(!text) return message.channel.send("Specify text!");


    	if (text.length >= 61) return message.channel.send("Text too long! (max 60  characters)");

      message.delete();

    	try {
    		const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${text}`));
    		const json = await res.json();

    		const embed = new MessageEmbed()
    			.setImage(json.message);
    		message.channel.send(embed);
    	} catch(err) {

    		console.log(err);
}
	},
};
