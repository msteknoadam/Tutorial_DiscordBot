const Discord = require('discord.js');
const fs = require('fs');
const CONFIG = require('./bot_config.json');
const commandsDir = './src/commands/';
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir(commandsDir, (err, files) => {
	if (err) console.log(err);

	let jsFiles = files.filter(file => file.split('.').pop() === 'js'); // Filter js files from the dir
	if (jsFiles.length <= 0) {
		console.log("Couldn't find any commands.");
		return;
	}

	jsFiles.forEach(file => {
		let props = require(`${commandsDir}${file}`); // C:\Users\TEKNO\Desktop\folder\src\commands\ping.js
		bot.commands.set(props.help.name, props); // prop.run - prop.help
		console.log(`Command ${props.help.name} loaded!`);
	});
});

bot.on('ready', () => {
	console.log(`${bot.user.username} is now online on ${bot.guilds.size} servers!`);
});

bot.on('message', message => {
	if (message.content.startsWith(CONFIG.prefix)) {
		// !this
		message.content = message.content.slice(CONFIG.prefix.length); // this
		let splittedMessage = message.content.split(' '); // !command arg1 arg2 -> command arg1 arg2 -> ["command", "arg1", "arg2"]
		let command = splittedMessage[0]; //ping
		splittedMessage = splittedMessage.slice(1);
		let args = splittedMessage;

		let commandFile = bot.commands.get(command); //search for our command -> ping
		if (!commandFile) return; //music -> just returns
		commandFile.run(bot, message, args);
	}
});

bot.login(CONFIG.token);
