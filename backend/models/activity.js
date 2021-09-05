import mongoose from 'mongoose';

const activitySchema = mongoose.Schema({
    school: String,
    activity: String,
    requirement: String,
    location: String,
    volunteer: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var activityMessage = mongoose.model('activityMessage', activitySchema);

export default activityMessage;