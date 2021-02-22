const { MessageEmbed } = require("discord.js");
const { shorten } = require('tinyurl');

module.exports = {
	name: 'shorturl',
	description: 'Creates a shorturl on the URl you sent.',
  aliases: ['surl', 'short-url'],
	usage: '[link]',
	guildOnly: false,
	execute(message, args) {

    const mes = message.content.split(' ').slice(1).join(' ');
  	try {
  		shorten(mes, function(res) {
  			message.channel.send(res);
  		});
  	} catch (err) {
  		console.log(err);
  	}

		}
};
