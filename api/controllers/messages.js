const { validationResult } = require('express-validator');

let messages = [];

exports.sendMessage = async (req, res) => {
    const message = req.body.message;

    let error = validationResult(req);
    if (!error.isEmpty()) {
        error = error.array()[0];
        
        return res.status(422).json({
            error: { param: error.param, message: error.msg }
        });
    }

    await messages.push(message);

    return res.status(201).json({ status: 'ok', message: message });
}

exports.getMessages = (req, res) => {
    return res.status(200).json({ status: 'ok', count: messages.length, messages: messages });
}