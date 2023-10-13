const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
   username:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: 111,
    },
    thoughts: [{
        type: Schema.Types.Object,
        ref: "Thought",
    }
],
    friends: [{
        type: Schema.Types.Object,
        ref: "User",
    }
 ],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
})

const User = model( 'user', userSchema);

module.exports = User;
