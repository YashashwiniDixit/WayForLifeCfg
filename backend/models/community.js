import mongoose from 'mongoose';

const communitySchema = mongoose.Schema({
    sender: String,
    query: String,
    type : String,
    createdAt: {
        type: Date,
       default: new Date(),
     },
})

var communityMessage = mongoose.model('communityMessage', communitySchema);

export default communityMessage;