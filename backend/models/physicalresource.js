const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const resourceSchema = new Schema({

    needed_amount:{
        type:Number,
        required:true

    },
    availability_amount:{
        type: Number,
        required:true
    },

    catogory :{
        type :String,
        required :true
    },

    chair:{
        type: Number,
        required :true
    },

    table:{
        type:Number,
        required :true
    },

    blackboard:{
        type:Number,
        required :true
    },

    whiteboard:{
        type:Number,
        required :true
    },

    cupboards:{
        type:Number,
        required :true
    },

    teacher_chair:{
        type:Number,
        required :true
    },

    
    teacher_table:{
        type:Number,
        required :true
    }
})

const resource=mongoose.model("physical_resource",resourceSchema);
module.exports=resource;