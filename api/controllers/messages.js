const { ValidationError } = require('../error');

let messages = [];

exports.sendMessage = async (req, res) => {
    const message = req.body.message;

    if (!message || message.length === 0) {
        const err = new ValidationError('MESSAGE_SHOULD_NOT_BE_EMPTY');
        return res.status(400).json({ error: { name: err.name, message: err.message } });
    }

    await messages.push(message);
    
    return res.status(201).json({ status: 'ok', message: message });
}

exports.getMessages = (req, res) => {
    if (messages.length === 0) {
        const err = new ValidationError('MESSAGE_IS_EMPTY');
        return res.status(400).json({ error: { name: err.name, message: err.message } });
    }

    res.status(200).json({ status: 'ok', count: messages.length, messages: messages });
}