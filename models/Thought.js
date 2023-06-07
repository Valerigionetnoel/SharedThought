const { Schema, model } = require('mongoose')
const Reaction = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlenght: 1,
            maxlenght: 280
        },
        createdAt: {
            type: Date,
            Default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reaction: [Reaction]
    }
);

const Thought = model('thought', thoughtSchema);
module.exports = Thought