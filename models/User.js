const { Schema, model } = require('mongoose');
const Thought = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (email) {
                    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
                    return emailRegex.test(email);
                },
                message: 'Invalid email format',
            },
        },
        thoughts: [Thought],
        friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }],
    }
)

const User = model('user', userSchema)

module.exports = User;