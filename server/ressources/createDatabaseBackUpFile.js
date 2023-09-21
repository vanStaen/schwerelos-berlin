const fs = require('fs');
const { Client } = require("pg");
require('dotenv').config({ path: __dirname + '/./../../.env' })


// init Postgres
const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: true })
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; // This bypasses the SSL verification


// Connect to Postgres 
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('Connected to postgres db!')
    }
})

// Fetch content from db
const fetchDatabaseContent = async (value) => {
    try {
        const result = await client.query(`SELECT * FROM ${value};`);
        return result.rows;
    } catch (err) {
        console.log({ error: `${err})`, });
    }
}

// Write Backup file 
const writeBackupFile = async () => {
    try {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; //Start from 0
        const day = today.getDate();
        const databaseContentGigs = await fetchDatabaseContent("gigs");
        filenameGigs = `${day}-${month}-${year}_schwerelos-berlin_gigs.json`;
        fs.writeFileSync(`../../../database-backups/schwerelos-berlin/${filenameGigs}`, JSON.stringify(databaseContentGigs));
        const databaseContentGuestlists = await fetchDatabaseContent("guestlists");
        filenameGLs = `${day}-${month}-${year}_schwerelos-berlin_guestlists.json`;
        fs.writeFileSync(`../../../database-backups/schwerelos-berlin/${filenameGLs}`, JSON.stringify(databaseContentGuestlists));
        const databaseContentArtistGuestlists = await fetchDatabaseContent("artistguestlists");
        filenameArtistGuestlists = `${day}-${month}-${year}_schwerelos-berlin_artistguestlists.json`;
        fs.writeFileSync(`../../../database-backups/schwerelos-berlin/${filenameArtistGuestlists}`, JSON.stringify(databaseContentArtistGuestlists));
        const databaseContentUsers = await fetchDatabaseContent("users");
        filenameUsers = `${day}-${month}-${year}_schwerelos-berlin_users.json`;
        fs.writeFileSync(`../../../database-backups/schwerelos-berlin/${filenameUsers}`, JSON.stringify(databaseContentUsers));
        const databaseContentTickets = await fetchDatabaseContent("tickets");
        filenameTickets = `${day}-${month}-${year}_schwerelos-berlin_tickets.json`;
        fs.writeFileSync(`../../../database-backups/schwerelos-berlin/${filenameTickets}`, JSON.stringify(databaseContentTickets));
        const databaseContentOrders = await fetchDatabaseContent("orders");1
        filenameOrders = `${day}-${month}-${year}_schwerelos-berlin_orders.json`;
        fs.writeFileSync(`../../../database-backups/schwerelos-berlin/${filenameOrders}`, JSON.stringify(databaseContentOrders));
    } catch (err) {
        console.log({ error: `${err})`, });
    }
};

// Write Backup file 
const excecuteScript = async () => {
    try {
        await writeBackupFile();
        console.log("Backup Success!")
        client.end();
    } catch (err) {
        console.log({ error: `${err})`, });
    }
};

// Running the script
excecuteScript();




