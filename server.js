const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const SERVER_PORT = 3001;

const db = require('./db');


app.use('/', express.static(path.join(__dirname, '/public/')));

app.get('/metainfo', (req, res) => {
    db.getMetaInfo()
    .then(payload => { res.send(payload); })
    .catch(err => { res.send(err) });
});


http.listen(SERVER_PORT, () => {
    console.log('Server running on PORT: ', SERVER_PORT);
});
