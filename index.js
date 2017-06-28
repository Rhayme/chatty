var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var messages = ['hello world'];
app.use(express.static('assets'));
app.use(bodyParser.json());


app.get('/messages', function(req, res, next) {
    res.status(200).json({ messages: messages });

});

app.post('/messages', function(req, res, next) {
    messages.push({ message: req.body.message.message, time: new Date(), user: req.body.message.user, image: 'https://s-media-cache-ak0.pinimg.com/736x/82/88/54/828854c34e9f993bd48558af472c96ff.jpg' });
    res.status(200).json({ messages: messages });
});

var port = 3000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});