const mongoose = require('mongoose');

const MessagesChema = new mongoose.Schema({
    message: {
        text: {
            type: String,
            require: true
        }
    },
    users: Array,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Messages', MessagesChema);