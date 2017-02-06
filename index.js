const request = require('request');

function getAVSToken(callback) {
    request({
        url: 'https://192.168.1.123:3000/provision/accessToken?sessionId=fc84c6c7-7a93-4886-a604-bac3c6546d4a',
        rejectUnauthorized: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const accessToken = JSON.parse(body)['access_token'];
            callback({accessToken});
        } else {
            console.error(error);
        }
    });
}

function sendAVSRequest(params) {
    const accessToken = params.accessToken;
    console.log(accessToken);
}

getAVSToken(sendAVSRequest);
