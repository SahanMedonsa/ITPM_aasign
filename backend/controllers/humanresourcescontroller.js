const hresource = require("../models/h_resource");

//get all hresource
const getAllhresource =async(req,res,next) =>{
    let hresources;
    try{
        hresources= await hresource.find 
        ();
    }catch(err){
        console.log(err);
    }if (!hresources){
        return res.status(404).json({message:"Nothing found"})
    }
    return res.status(200).json(hresources);

};

//get hresource by ID
const getByIDhresource = async(req,res,next)=>{
const id = req.params.id;
let  hresources;
try{
    hresources = await hresource.findById(id);
}catch(err){
    console.log(err);
}
if(! hresources){
    return res.status(404).json({message:"NO statment found"});
}else{
    return res.status(200).json({hresources});
}
}

//update hresource
const updatehresource = async (req,res,next) => {
    const id = req.params.id;
    const{Principals,Primary_Teachers,Secondary_Teachers,Tertiary_Teachers,Primary_Students,Secondary_Students,Tertiary_Students,Category_1,Category_2,Teacher_Count,Unavaialbility_of_Teachers}=req.body;
    let  hresources;
    try{
        hresources = await hresource.findByIdAndUpdate(id,{
            Principals,
            Primary_Teachers,
            Secondary_Teachers,
            Tertiary_Teachers,
            Primary_Students,
            Secondary_Students,
            Tertiary_Students,
            Category_1,
            Category_2,
            Teacher_Count,
            Unavaialbility_of_Teachers
        });
        hresources= await hresource.save();
    }catch(err){
        console.log(err);
    }
    if(! hresources){
        return res.status(404).json({message:"unable to update by id"});
    }
    return res.status(200).json({ hresources})
};

//add hresource
const addhresource = async(req,res,next) => {
    const {Principals,Primary_Teachers,Secondary_Teachers,Tertiary_Teachers,Primary_Students,Secondary_Students,Tertiary_Students,Category_1,Category_2,Teacher_Count,Unavaialbility_of_Teachers} =req.body;
    let  hresources;
    try{
        hresources =new hresource({
            Principals,
            Primary_Teachers,
            Secondary_Teachers,
            Tertiary_Teachers,
            Primary_Students,
            Secondary_Students,
            Tertiary_Students,
            Category_1,
            Category_2,
            Teacher_Count,
            Unavaialbility_of_Teachers
        });
        await  hresources.save();
    }catch(err){
        console.log(err);
    }
    if (!hresources){
        return res.status(500).json({message: "unable to add"});
    }
    return res.status(201).json(hresources);
};

//delete hresource
const deletehresource =async(req,res,next) =>{ 
    const id=req.params.id;
    let  hresources;
    try{
        hresources = await hresource.findByIdAndRemove(id);
    }catch(err) {
        console.log(err);
    }
    if(!hresources){
        return res.status(404).json({message:"Unable to Delete by id"});
    }
    return res.status(200).json({message: "statment successfully deleted "});
};

exports.getAllhresource =getAllhresource;
exports.getByIDhresource = getByIDhresource;
exports.updatehresource =updatehresource;
exports.addhresource = addhresource;
exports.deletehresource =deletehresource;