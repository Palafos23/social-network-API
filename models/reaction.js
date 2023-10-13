const { Schema } = require('mongoose');

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
        get: (date) => {
            //getter method to format the timestamp on querry
    },
},
},
{
    toJSON: {
         getter: true,
    },
    id: false,
}
);

module.exports = reactionSchema;