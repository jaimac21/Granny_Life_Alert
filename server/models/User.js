const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        email: { type : String, required: true },
        passwordHash: { type: String, required: false },
        emailContacts: [String],
        smsContacts: [String],
        callContacts: [String],
        firstName: {type: String},
        lastName: {type: String},
        customMessage: {type: String}
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)