const express = require('express');
const { sendMessage, generateQRCode } = require('../controllers/whatsappController');

const router = express.Router();

router.get('/connect', generateQRCode);
router.post('/send', sendMessage);

module.exports = router;