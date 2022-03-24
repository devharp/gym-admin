const sqlite = require('sqlite3');
const db_source = './database/harp.db';

// fs.writeFileSync(path.join(__dirname, '/webpage-content/home/content.json'), JSON.stringify(payload), 'utf-8');


const db = new sqlite.Database(db_source, sqlite.OPEN_READWRITE, err => {
    if(err){
        console.error(err);
    }
    console.log('Connected to the database');    
});


const getMetaInfo = () => {
    const res = new Promise((resolve, reject) => {

        db.all('select * from page', (err, row) => {
            if(err){
                reject(err);
            }
            resolve(row);
        });
    });
    return res;
}

async function dat(){
    let webpage_content = {};
    
}

function dbClose(){
    db.close(err => {
        console.log('Database connection closed.')
    });
}

module.exports = { getMetaInfo };

