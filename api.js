const { google } = require('googleapis');

function authorizeClient(client) {
    return new Promise((resolve, reject) => {
        client.authorize(function(err, tokens) {
            if (err) {
                reject(err);
            } else {
                console.log('Connected!');
                resolve();
            }
        });
    });
}

async function gsrun(client, name, phone, stand) {
    try {
        await authorizeClient(client);
    } catch (err) {
        console.error('Error during client authorization:', err);
        throw err; // re-throw the error so it can be handled by the caller
    }
    const gsapi = google.sheets({ version: 'v4', auth: client });

    // Create an array with the retrieved values
    const userDataArray = [name, phone, stand];

    const appendOptions = {
        spreadsheetId: '1JrGFQ8bbXbCeUrXV0UUVOrRnZnUoyc7jdeOrmxwjh0A',
        range: 'Sheet1', // Change Sheet1 if your worksheet's name is different
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [userDataArray] // Your values here
        }
    };

    let res = await gsapi.spreadsheets.values.append(appendOptions);
    console.log(res.data);
}
module.exports = gsrun;