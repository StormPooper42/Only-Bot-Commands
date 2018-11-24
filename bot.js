const discord = require('discord.js');
const bot = new discord.Client();


bot.on('message', message => {
	if(message.channel.id != '374180057524076544' || message.author.bot) return;

	var msg = message.content;

	if(!msg.startsWith('!') && !msg.startsWith('gs.')) {
	   message.delete();
	   message.reply('In questo canale sono ammessi solo comandi per i ' +
	                 'bot, riprova sul canale "generale"')
			  .then(d_msg => { d_msg.delete(7000); })
	}
});

bot.login(process.env.BOT_TOKEN);
