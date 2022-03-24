const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const bodyparser = require('body-parser');
const SERVER_PORT = 3001;

const db = require('./db');

app.use(require('cors')());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.text());
app.use('/', express.static(path.join(__dirname, '/public/')));

app.post('/metainfo', (req, res) => {
    console.log(req.body);
    db.getMetaInfo()
    .then(payload => { 
        if(req.body === '.all'){
            res.send(payload);
            return;
        }
        for(e of payload){
            if(e.name === req.body){
                res.send(e);
                return;
            }
        }
        res.sendStatus(500);
    })
    .catch(err => { res.send(err) });
});


http.listen(SERVER_PORT, () => {
    console.log('Server running on PORT: ', SERVER_PORT);
});
