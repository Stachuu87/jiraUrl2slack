const config = {
    regexp: new RegExp('([(a-z}A-Z)][(a-z0-9|A-Z0-9)]+-[0-9]+)', 'g'),
    bot_token: 'xxxx-xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxx-xxxxxx',  // put Your app bot token gained from Your app dashboard on slack.com
    slack_api_url: 'https://slack.com/api/chat.postMessage',  // this endpoint allows You to send messages to any workspace
    jira_protocol: 'https://',
    jira_url: 'jira.your-host.com/browse/'  // insert address of You own jira copy on Your server. Remember to leave /browse/ at the end of the string
}

module.exports = config;