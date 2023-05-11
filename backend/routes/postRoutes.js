const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    caption:{
        type: String,
        require: true
    },

    category:{
        type: String,
        require: true
    },

    Photo:{
        type: String,
        require: true
    }
 
})

const Post = mongoose.model("Post", PostSchema);
module.exports=Post;