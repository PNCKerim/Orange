const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

module.exports = {
	name: 'instagram',
	description: 'Find out some nice instagram statistics',
	aliases: ['insta'],
	usage: '[username]',
	guildOnly: false,
	async execute(message, args) {
    const name = args.join(" ");

        if (!name) {
            return message.reply("Give me a username!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;

        let res;

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("I couldn't find that account... :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor("#DD2A7B")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profile information", stripIndents`**- Username:** ${account.username}
            **- Full name:** ${account.full_name}
            **- Biography:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Posts:** ${account.edge_owner_to_timeline_media.count}
            **- Followers:** ${account.edge_followed_by.count}
            **- Following:** ${account.edge_follow.count}
            **- Private account:** ${account.is_private ? "Yes 🔐" : "Nope 🔓"}`);

        message.channel.send(embed);

	},
};
