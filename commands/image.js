const { MessageEmbed } = require("discord.js");
const { image_search } = require('duckduckgo-images-api');

module.exports = {
  name: 'image',
	description: 'Finds an image based on the topic.',
	aliases: ['img', 'im'],
  cooldown: 3,
	usage: '[term]',
	guildOnly: false,
	async execute(message, args) {

        if (!args[0]) return message.channel.send("Provide a search term.");

    	let results = await image_search({ query: args.join(' '), moderate: false, iterations: 2, retries: 2 });

    	const embed = new MessageEmbed()
        .setTitle(args.join(" "))
    		.setImage(results[Math.floor(Math.random() * 101)].image);
    	message.channel.send(embed);


  },

};
