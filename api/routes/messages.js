const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const MessagesController = require('../controllers/messages');

router.post(
    '/', 
    [
        check('message').exists().withMessage("PARAM_IS_INVALID"), 
        check('message').isLength({ min: 1 }).withMessage('MESSAGE_SHOULD_NOT_BE_EMPTY'),
    ],
    MessagesController.sendMessage
);

router.get(
    '/',
    MessagesController.getMessages
);

module.exports = router;