const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'avatar',
	description: 'Get the avatar of the tagged user, or your own avatar.',
	aliases: ['icon', 'pfp', 'av'],
	usage: '(@user)',
	guildOnly: false,
	execute(message) {

		let user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);

		const Embed = new MessageEmbed()
			.addField(`Username`, `**${user.username}#${user.discriminator}**`, true)
			.addField(`Image URL`, `[Click Here To Open](${user.avatarURL()})`, true)
			.setColor("RANDOM")
			.setImage(user.displayAvatarURL());
      message.channel.send(Embed);
	},
};
