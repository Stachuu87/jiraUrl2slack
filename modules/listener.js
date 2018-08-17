const config = require('./config');
const bot = require('./bot');

const listener = {
    checkMessage: function (body, message) {
        if (body.event.subtype != "bot_message") {  //prevent bot from self replies
            var tickets = message.match(config.regexp);
            if (tickets.length) {
                tickets.forEach(function(ticket) {
                    if(message.includes(config.jira_url + ticket)) return;  // ignore tickets if they are entered with a link
                    bot.sendMessage(body, ticket);
                })
            }
        }
    }
}

module.exports = listener;