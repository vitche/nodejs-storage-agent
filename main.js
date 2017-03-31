var mongoose = require('mongoose');
module.exports = {
    Agent: mongoose.model('Agent', new mongoose.Schema({
        token: mongoose.Schema.Types.ObjectId,
        updated: {
            type: Date,
            default: Date.now
        },
        // This agent's account
        accountIdentifier: mongoose.Schema.Types.ObjectId,
        active: 'boolean'
    }))
};
