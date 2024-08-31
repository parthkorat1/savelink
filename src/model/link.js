import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        
    },
    link: {
        type: String,
        required: [true, "Please provide a link"],
        unique: true,
    },
    
    description:{
        type:String,
        
    },
   
})

const Link = mongoose.models.Link || mongoose.model("Link", linkSchema);

export default Link;