import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    type : String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var userMessage = mongoose.model('userMessage', userSchema);

export default userMessage;