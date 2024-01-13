function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyCAR8QpI0FlmkDcCJt8N93t0MTIq5AqIrQ',
        clientId: '166117605488-gf8rmoeq4odbpgcpsf7fali6jshc5v04.apps.googleusercontent.com', // Replace with your Client ID
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        gapi.auth2.getAuthInstance().signIn().then(function() {
            // Get the user data from local storage
            let userData = JSON.parse(localStorage.getItem('user-data'));

            var params = {
                spreadsheetId: '1JrGFQ8bbXbCeUrXV0UUVOrRnZnUoyc7jdeOrmxwjh0A',
                range: 'Sheet1',  // update this with your range
                valueInputOption: 'RAW',
                insertDataOption: 'INSERT_ROWS',
            };
            var valueRangeBody = {
                "values": [
                    [userData.name, userData.phoneNumber],  // update this with your data
                ]
            };
            var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
            request.then(function(response) {
                console.log(response.result);
            }, function(reason) {
                console.error('error: ' + reason.result.error.message);
            });
        });
    });
}