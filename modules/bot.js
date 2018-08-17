const request = require("request");

const config = require('./config');

const bot = {
    sendMessage : function (body, ticket) {
        if (body.event.type == "message" && body.event.subtype != "bot_message") {
            var options = {
                method: 'POST',
                url: config.slack_api_url,
                headers:
                {
                    'cache-control': 'no-cache',
                    authorization: 'Bearer ' + config.bot_token,
                    'content-type': 'application/json'
                },
                body: { text: config.jira_protocol + config.jira_url + ticket, channel: body.event.channel },
                json: true
            };
            request(options, function (error, response, body) {
                console.log(config);
                if (error) throw new Error(error);
            });
        }
    }
}

module.exports = bot;