const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'qr',
	description: 'Create a QR code.',
  cooldown: 3,
	usage: '[text | file]',
	guildOnly: false,
	async execute(message, args) {

    let text = args.join(' ');
  	if (!text) return message.channel.send("Specify a text or file.")

  	try {
  		// send image in embed
  		const embed = new MessageEmbed()
  			.setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(' ', 'g'), '%20')}`);
  		      message.channel.send(embed);
  	} catch(err) {

  		console.log(err)
  	}

  },

};
