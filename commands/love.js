const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'love',
	description: 'The love calculator.',
  aliases: ['ship'],
	usage: '[first name] [second name] ',
	guildOnly: false,
	execute(message, args) {

    const oneperson = args[0];
    if(!oneperson) return message.channel.send("Give me a name!");
    const secondperson = args[1] || message.author.username;


        // love is the percentage
        // loveIndex is a number from 0 to 10, based on that love variable
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new MessageEmbed()
            .setColor("#CE073F")
            .addField(`☁ **${oneperson}** loves **${secondperson}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);

	},
};
