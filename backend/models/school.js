import mongoose from 'mongoose';

const schoolSchema = mongoose.Schema({
    schoolName: String,
    email: String,
    mobno:Number,
    event: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var schoolMessage = mongoose.model('schoolMessage', schoolSchema);

export default schoolMessage;