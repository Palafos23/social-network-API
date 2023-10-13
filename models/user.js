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
        match:[
            /^[A-Za-z0-9~!@#$%^&*()_+?><:;=-]{2,15}@[a-zA-Z]{5,10}.[a-z]{1,8}$/, 
            'Enter an accepted email address',
        ],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }
],
    friends: [{
        type: Schema.Types.ObjectId,
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
