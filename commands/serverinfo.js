const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'serverinfo',
	description: 'Displays server information.',
	usage: ' ',
	guildOnly: true,
	execute(message) {

	//message.guild.members.fetch().then(fetchedMembers => {
	//const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');

    	const Embed = new MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL())
			.setColor("RANDOM")
      .setThumbnail(message.guild.iconURL())
      .addField("Owner", `<@${message.guild.ownerID}>`)
			.addField("Server ID", message.guild.id)
      .addField("Region", message.guild.region)
			.addField("Created On", message.guild.createdAt)
      .addField("Members", `${message.guild.memberCount}`)
			.addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`);

    message.channel.send(Embed);
		//});
	},
};
