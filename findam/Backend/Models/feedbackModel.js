const mongoose = require("mongoose")
const feedbackSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    chatSessionID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatSession',
        required: true,
    },
    rating: {
        type: Number,
        required: [true, "Please add a rating"],
        min: 1,
        max: 5,
    },
    comments: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
