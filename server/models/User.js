const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        email: { type : String, required: true },
        passwordHash: { type: String, required: true },
        emailContacts: [String],
        smsContacts: [String],
        callContacts: [String]
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)