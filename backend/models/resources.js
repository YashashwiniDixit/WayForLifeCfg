import mongoose from 'mongoose';


const resourcesSchema = mongoose.Schema({
    attachment: String,
    name: String,
    volunteerName:String,
    schoolName: String,
    createdAt: {
        type: Date,
       default: new Date(),
     },
})

var resourcesMessage = mongoose.model('resourcesMessage', resourcesSchema);

export default resourcesMessage;