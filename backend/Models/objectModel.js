const mongoose = require("mongoose")
const objectSchema = new mongoose.Schema({
    // userID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users',
    //     required: true,
    // },
    title: {
        type: String,
        required: [true, "Please add a title"],
    },
    description: {
        type: String,
        required: [true, "Please add description"],
    },
    metadata: {
        type: Map,
        of: String,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    },
    lastModified: {
        type: Date,
        default: Date.now,
    },
    version: {
        type: Number,
        default: 1,
    },
    // categoryID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'categories',
    //     required: true,
    // },
    imageURL: {
        type: String,
        required: false,  // required
    }
}, {
    timestamps: true,
});

const Object = mongoose.model('Object', objectSchema);
module.exports = Object;
