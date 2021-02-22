const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
  name: 'meme',
	description: 'Sends an epic meme.',
	usage: ' ',
  cooldown: 3,
	guildOnly: false,
	async execute(message, args) {
    const subReddits = ["dankmemes", "memes", "me_irl", "crappyoffbrands", "im14andthisisdeep", "trippinthroughtime", "PewdiepieSubmissions"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    console.log(img);
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
  },
};
