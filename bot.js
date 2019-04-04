const Discord = require('discord.js');
const prefix = '!';
const bot = new Discord.Client();

bot.on('ready', () => {
	console.log(`${bot.user.username} is now online on ${bot.guilds.size} servers!`);
});

bot.on('message', message => {
	if (message.content.startsWith(prefix)) {
		// Message content is !test
		message.content = message.content.slice(prefix.length); // Message content is test
		let splitMessage = message.content.split(' ');
		let command = splitMessage[0];
		splitMessage = splitMessage.slice(1);
		let args = splitMessage;
		if (command === 'ping') return message.channel.send(`Pong!`);
	}
});

bot.login('NTYzMzk5ODQ0Mzk2NTMxNzM0.XKYxBQ.3L2hQWCDsxO5N1RWkOLDEFljS0M');
