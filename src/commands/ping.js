// bot, message, args

module.exports.run = (bot, message, args) => {
	return message.channel.send(`Pong! 🏓`);
};
// ! + ping
module.exports.help = {
	name: 'ping',
};
