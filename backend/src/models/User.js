const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        // required: true,
    },
    // social: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Social' 
    // }],
}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);