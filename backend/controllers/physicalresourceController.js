const physical_resource=require("../models/physicalresource");


//get all sphysical_resource
const getAllp_resource =async(req,res,next) =>{
    let resources;
    try{
        resources= await physical_resource.find();
    }catch(err){
        console.log(err);
    }if (!resources){
        return res.status(404).json({message:"Nothing found"})
    }
    return res.status(200).json(resources);

};

//get statement by ID
const getByID = async(req,res,next)=>{
const id = req.params.id;
let resources;
try{
    resources = await physical_resource.findById(id);
}catch(err){
    console.log(err);
}
if(!resources){
    return res.status(404).json({message:"NO statment found"});
}else{
    return res.status(200).json({resources});
}
}

//update statment
const updatep_resource = async (req,res,next) => {
    const id = req.params.id;
    const{title,statement,catogory,photo}=req.body;
    let resources;
    try{
        resources = await physical_resource.findByIdAndUpdate(id,{
            catogory,
            chair,
            whiteboard,
            cupboards,
            teacher_chair,
            teacher_table
        });
        resources = await resources.save();
    }catch(err){
        console.log(err);
    }
    if(!resources){
        return res.status(404).json({message:"unable to update by id"});
    }
    return res.status(200).json({resources})
};

//add statment
const addp_resource= async(req,res,next) => {
    const {title,statement,catogory,photo} =req.body;
    let resources;
    try{
        resources =new Statement({
            catogory,
            chair,
            whiteboard,
            cupboards,
            teacher_chair,
            teacher_table
        });
        await resources.save();
    }catch(err){
        console.log(err);
    }
    if (!resources){
        return res.status(500).json({message: "unable to add"});
    }
    return res.status(201).json(resources);
};

//delete statment
const deletep_resource =async(req,res,next) =>{ 
    const id=req.params.id;
    let resources;
    try{
        resources = await physical_resource.findByIdAndRemove(id);
    }catch(err) {
        console.log(err);
    }
    if(!resources){
        return res.status(404).json({message:"Unable to Delete by id"});
    }
    return res.status(200).json({message: "resources successfully deleted "});
};

exports.getAllp_resource =getAllp_resource;
exports.getByID = getByID;
exports.updatep_resource =updatep_resource;
exports.addp_resource = addp_resource;
exports.deletep_resource =deletep_resource;
