const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const h_resourceSchema = new Schema({

    Principals:{
        type:String,
        required:true

    },
    Primary_Teachers:{
        type: Number,
        required:true
    },

    Secondary_Teachers:{
        type :Number,
        required:true
    },

    Tertiary_Teachers:{
        type :Number,
        required:true
    },
    Primary_Students:{
        type: Number,
        required:true
    },

    Secondary_Students:{
        type :Number,
        required:true
    },

    Tertiary_Students:{
        type :Number,
        required:true
    },

    Category_1:{
        type :String,
        required:true
    },

    Category_2:{
        type :String,
        required:true
    },

    Teacher_Count:{
        type :Number,
        required:true
    },

    Unavaialbility_of_Teachers:{
        type :Number,
        required:true
    }
})

const hresource =mongoose.model("hresource",h_resourceSchema);
module.exports = hresource;