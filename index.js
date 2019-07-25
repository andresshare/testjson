let express = require('express')
let app = express();
let path = require('path');
let Pusher = require('pusher');
let bodyParser = require('body-parser');
let pusher = new Pusher({
    appId: '501582'
    , key: '***'
    , secret: '***'
    , cluster: 'us2'
    , encrypted: true
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.post('/comment', function (req, res) {
    console.log(req.body);
    let newMessage = {
        name: req.body.name
        , message: req.body.message
    }
    pusher.trigger('my-channel', 'my-event', newMessage);
    res.json({
        created: true
    });
})
app.listen(3000)