const Statement = require("../models/statement");

//get all statements
const getAllStatement =async(req,res,next) =>{
    let statement;
    try{
        statement= await Statement.find();
    }catch(err){
        console.log(err);
    }if (!statement){
        return res.status(404).json({message:"Nothing found"})
    }
    return res.status(200).json(statement);

};

//get statement by ID
const getByID = async(req,res,next)=>{
const id = req.params.id;
let statements;
try{
    statements = await Statement.findById(id);
}catch(err){
    console.log(err);
}
if(!statements){
    return res.status(404).json({message:"NO statment found"});
}else{
    return res.status(200).json({statements});
}
}

//update statment
const updateStatement = async (req,res,next) => {
    const id = req.params.id;
    const{title,statement,catogory,photo}=req.body;
    let statements;
    try{
        statements = await Statement.findByIdAndUpdate(id,{
            title,
            statement,
            catogory,
            photo
        });
        statements = await Statement.save();
    }catch(err){
        console.log(err);
    }
    if(!statements){
        return res.status(404).json({message:"unable to update by id"});
    }
    return res.status(200).json({statements})
};

//add statment
const addStatments = async(req,res,next) => {
    const {title,statement,catogory,photo} =req.body;
    let statements;
    try{
        statements =new Statement({
            title,
            statement,
            catogory,
            photo
        });
        await statements.save();
    }catch(err){
        console.log(err);
    }
    if (!statements){
        return res.status(500).json({message: "unable to add"});
    }
    return res.status(201).json(statements);
};

//delete statment
const deleteStatment =async(req,res,next) =>{ 
    const id=req.params.id;
    let statements;
    try{
        statements = await Statement.findByIdAndRemove(id);
    }catch(err) {
        console.log(err);
    }
    if(!statements){
        return res.status(404).json({message:"Unable to Delete by id"});
    }
    return res.status(200).json({message: "statment successfully deleted "});
};

exports.getAllStatement =getAllStatement;
exports.getByID = getByID;
exports.updateStatement =updateStatement;
exports.addStatments = addStatments;
exports.deleteStatment =deleteStatment;

