const express = require('express');
const router = express.Router();

const MessagesController = require('../controllers/messages');

router.post('/', MessagesController.sendMessage);

router.get('/', MessagesController.getMessages);

module.exports = router;