const Discord = require('discord.js');
const CONFIG = require('./bot_config.json');
const bot = new Discord.Client();

bot.on('ready', () => {
	console.log(`${bot.user.username} is now online on ${bot.guilds.size} servers!`);
});

bot.on('message', message => {
	if (message.content.startsWith(CONFIG.prefix)) {
		// !this
		message.content = message.content.slice(CONFIG.prefix.length); // this
		let splittedMessage = message.content.split(' '); // !command arg1 arg2 -> command arg1 arg2 -> ["command", "arg1", "arg2"]
		let command = splittedMessage[0];
		splittedMessage = splittedMessage.slice(1);
		let args = splittedMessage;

		if (command === 'ping') {
			return message.channel.send(`Pong! 🏓`);
		}
	}
});

bot.login(CONFIG.token);
