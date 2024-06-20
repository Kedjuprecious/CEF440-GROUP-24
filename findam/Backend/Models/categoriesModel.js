const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "Please add a category name"],
    },
    description: {
        type: String,
    },
}, {
    timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
