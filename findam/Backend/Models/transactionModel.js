const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: [true, "Please add an amount"],
    },
    transactionDate: {
        type: Date,
        default: Date.now,
    },
    paymentMethod: {
        type: String,
        required: [true, "Please add a payment method"],
    },
    status: {
        type: String,
        enum: ["Pending", "Completed", "Failed"],
        default: "Pending",
    },
}, {
    timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
