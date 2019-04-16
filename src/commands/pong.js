// bot, message, args

module.exports.run = (bot, message, args) => {
	return message.channel.send(`Ping! 🏓`);
};
// ! + ping
module.exports.help = {
	name: 'pong',
};
