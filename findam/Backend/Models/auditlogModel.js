const mongoose = require("mongoose")
const auditLogSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    action: {
        type: String,
        required: [true, "Please add an action"],
    },
    details: {
        type: String,
    },
}, {
    timestamps: true,
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);
module.exports = AuditLog;

