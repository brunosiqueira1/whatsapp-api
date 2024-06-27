const venom = require('venom-bot');

let client;

const generateQRCode = async (req, res) => {
    if (!client) {
        client = await venom.create(
            'sessionName',
            (base64Qrimg, asciiQR, attempts, urlCode) => {
                console.log(asciiQR); // Optional to log the ASCII QR Code to the console
                res.send(`<img src="${base64Qrimg}"/>`);
            },
            undefined,
            { logQR: false }
        );
    } else {
        res.send("Already connected");
    }
};

const sendMessage = async (req, res) => {
    const { number, message } = req.body;
    if (!client) {
        return res.status(400).send("Client not connected");
    }

    try {
        await client.sendText(number, message);
        res.status(200).send("Message sent successfully");
    } catch (error) {
        res.status(500).send("Failed to send message");
    }
};

module.exports = { generateQRCode, sendMessage };