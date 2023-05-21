const Post = require("../models/post");

//get all
const getAllPost = async(req,res,next)=>{
    let post;
    try{
        post = await Post.find();
    }catch(err){
        console.log(err);
    }if(!post){
        return res.status(404).json({message: "Nothing found"})
    }
        return res.status(200).json(post);
};

//Get by ID
const getByID = async(req ,res ,next) => {
    const id = req.params.id;
    let post;
    try{
        post = await Post.findById(id);
    }catch (err) {
        console.log(err);
      }
      if (!post) {
        return res.status(404).json({message: "No post found" });
      }else{
        return res.status(200).json({post});
      } 
    };

//update
const updatePost = async(req ,res ,next) => {
    const id = req.params.id;
    const {caption , category , Photo} = req.body;
    let post;
    try{
        post = await Post.findByIdAndUpdate(id,
            {
                caption,
                category,
                Photo
            });
        post = await Post.save();
    } catch (err){
        console.log(err);
    }
    if(!post){
        return res.status(404).json({ message: "unable to update by id"});
    }
    };

//add
const addPost = async (req ,res ,next) => {
    const {caption , category , Photo} = req.body;
    let post;
    try{
        post = new Post({
            caption,
            category,
            Photo
        });
        await post.save();
    } catch(err){
        console.log(err);
    }
    if(!post){
        return res.status(500).json({ message: "unable to add"});
    }
    return res.status(201).json(post);
};

//delete
const deletePost = async(req ,res ,next) => {
    const id = req.params.id;
    let post;
    try {
        post = await Post.findByIdAndRemove(id);
    } catch (err){
        console.log.apply(err);
    }
    if(!post){
        return res.status(404).json({ message: "unable to delete"});
    }
        return res.status(200).json({message: "delete successfully"});
    };


exports.deletePost = deletePost;
exports.addPost = addPost;
exports.getAllPost = getAllPost;
exports.getByID = getByID;
exports.updatePost = updatePost;