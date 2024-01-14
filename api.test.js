const mockAxios = require('jest-mock-axios');
const { gsrun } = require('./api'); // Import your gsrun function

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.resetMocked();
});

test('gsrun appends data to Google Sheets', async () => {
    const cl = {}; // Mock client
    const name = 'John Doe';
    const phone = '1234567890';

    // Mock response from Google Sheets API
    const response = { data: { updates: { updatedCells: 2 } } };
    mockAxios.mockResponseFor(request => request.url.endsWith('/values/Sheet1:append'), response);

    await gsrun(cl, name, phone);

    expect(mockAxios.request).toHaveBeenCalledWith({
        url: 'https://sheets.googleapis.com/v4/spreadsheets/1JrGFQ8bbXbCeUrXV0UUVOrRnZnUoyc7jdeOrmxwjh0A/values/Sheet1:append',
        method: 'post',
        data: {
            values: [[name, phone]]
        },
        params: {
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS'
        },
        headers: {
            'Authorization': `Bearer ${cl.credentials.access_token}`
        }
    });
});