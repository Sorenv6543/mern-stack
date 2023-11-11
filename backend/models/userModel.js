const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: [true, 'Please add a name value'],
    },
    email: {
        type: String,
        required: [true, 'Please add a email value'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password value'],
    },
    ownedHouses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],


},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User', userSchema);


