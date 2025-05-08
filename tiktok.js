const { SlashCommandBuilder } = require('@discordjs/builders');
const { color } = require('../../data/config.json');
const { EmbedBuilder } = require('discord.js');
const scraperModule = await import('@xct007/tiktok-scraper');
const { default: TikTokScraper, someUtility } = scraperModule;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tiktok')
        .setDescription('Download video dari tiktok')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('link tiktok'))
	    	.setRequired(true)
		.setDMPermission(false),

        async execute(interaction) {
        	let url = interaction.options.getString('url');
		let result = await TikTokScraper(url, { parse: true, keys: ['desc_language']});
		//result.download.nowm
		interaction.reply({
			files: [{
				attachment: result.download.nowm,
				name: `${result.desc}.mp4`
			}]
		})
    },
};
