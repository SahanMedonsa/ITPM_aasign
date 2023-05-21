const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postschema = new Schema({

    caption : {
        type :String,
        required: true
    },

    category: {
        type:String,
        required: true
    } ,

    photo:{
        type : String   
    }

})

const Post =mongoose.model("post",postschema);
module.exports =Post;