const { Schema, model } = require('mongoose');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionbody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter method to format the timestamp on querry
    }
},
{
    toJSON: {
         virtuals: true,
         getter: true,
    },
    id: false,
}
);

module.exports = reactionSchema;