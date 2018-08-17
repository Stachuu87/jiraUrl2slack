const express = require('express');
const bodyParser = require('body-parser')

const listener = require('./modules/listener');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.post('/slack', function (req, res) {
    const body = req.body;
    res.set('Content-Type', 'text/plain')
    res.send(body.challenge)
    if (body.event.type == "message") {
        console.log(body)
        listener.checkMessage(body, body.event.text);
    }
})

app.listen(port, function () {
    console.log('App running on port ' + port);
});

process.on('uncaughtException', function (err) {
    console.log(err);
}); 