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
app.use('/admin', express.static(path.join(__dirname, '/frontend/build/')));
app.use('/admin/webpage-content', express.static(path.join(__dirname, '/public/webpage-content')));

app.post('/admin/metainfo', (req, res) => {
    console.log(req.body);
    db.getMetaInfo()
        .then(payload => {
            if (req.body === '.all') {
                res.send(payload);
                return;
            }
            for (e of payload) {
                if (e.name === req.body) {
                    res.send(e);
                    return;
                }
            }
            res.sendStatus(500);
        })
        .catch(err => { res.send(err) });
});

app.post('/admin/setcontent', (req, res) => {

    console.log(req.query);
    switch (req.query.name) {
        case 'HOME':
            // console.log(req.body);
            const fs = require('fs');
            fs.writeFileSync(path.join(__dirname, '/public/webpage-content/home/content.json'), String(req.body));
            console.log('Content has been changed');
            break;
        default:
            break;
    }

    res.sendStatus(200);

});


http.listen(SERVER_PORT, () => {
    console.log('Server running on PORT: ', SERVER_PORT);
});
