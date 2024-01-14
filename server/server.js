const express = require('express');
const bodyParser = require('body-parser');
const gsrun = require('../api.js'); // Import gsrun from api.js
const app = express();

// Now you can use `client` in your `gsrun` function
const { google } = require('googleapis');
const keys = require('../service-account-key.json');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);


// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/..'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', async function(req, res) {
    const name = req.body.name;
    const phone = req.body.phone;
    const stand = req.body.stand;

    try {
        // Call the gsrun function with the form data
        await gsrun(client, name, phone, stand);
        res.send('Submitted'); // Send a response back to the client

    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});