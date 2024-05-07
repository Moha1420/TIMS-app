const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be at least 8 characters"],
    },
    username: {
        type: String,
        unique: true
    },
    phoneNumber: {
        type: Number,
    },
    role: {
        type: String,
        enum: ['Super admin', 'admin', 'AACBE staff', 'Subcity staff', 'school admin '],
        default: 'school'
    },
    mainAddress: {
        type: String,
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
