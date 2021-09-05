import mongoose from 'mongoose';

const volunteerSchema = mongoose.Schema({
    name: String,
    email: String,
    mobno: String,
    skills: [String],
    interest: [String],
    profession: String,
    event: [String],
    status: String,
    address: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var volunteerMessage = mongoose.model('voluteerMessage', volunteerSchema);

export default volunteerMessage;