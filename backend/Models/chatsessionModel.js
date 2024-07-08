const mongoose = require("mongoose")
const chatSessionSchema = new mongoose.Schema({
    finderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    founderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
    },
    chatLog: {
        type: [String],
    },
    feedbackID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback',
    },
}, {
    timestamps: true,
});

const ChatSession = mongoose.model('ChatSession', chatSessionSchema);
module.exports = ChatSession;
