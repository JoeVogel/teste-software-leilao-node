const path = require('path');
const sqlite3 = require('sqlite3').verbose();


const dbPath = path.join(__dirname, 'auctions.db');
const db = new sqlite3.Database(dbPath);


// Create tables if they do not exist
// Note: simple schema for teaching purposes
// users(id, name)
// auctions(id, name, starting_price)
// bids(id, auction_id, user_id, amount)
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
        )`
    );


    db.run(`CREATE TABLE IF NOT EXISTS auctions (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        starting_price REAL NOT NULL
        )`
    );


    db.run(`CREATE TABLE IF NOT EXISTS bids (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        auction_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        amount REAL NOT NULL,
        FOREIGN KEY (auction_id) REFERENCES auctions(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
        )`
    );
});


module.exports = db;