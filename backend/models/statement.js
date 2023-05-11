const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statementSchema = new Schema({

    title : {
        type :String,
        required: true
    },

    statement: {
        type:String,
        required: true
    } ,

    catogory: {
        type:String,
        required: true
    },

    photo:{
        type : String   
    }

})

const statement =mongoose.model("statemnet",statementSchema);
module.exports = statement;