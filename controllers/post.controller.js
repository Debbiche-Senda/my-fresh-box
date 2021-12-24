const Post = require("../models/Post");
const User = require("../models/User");

/*********************** Add post ***************************** */
exports.addPost = async (req, res) => {

console.log(req.user._id)

  const newPost = new Post({
      userId: req.user._id,
      ...req.body
    });
  try {
// INPUT VALIDATION 


    // Ajouter une instance du post


  // enrg. le post
const post = await newPost.save();5


    const user = await User.findOne({
      _id: req.user._id
    })
    user.posts = [...user.posts, post._id]
    user.save()
    res.status(201).json({
      msg: "Register post success", 
      post
    })
  } catch (error) {
    res.status(401).json({
      msg: "Register post failed"
    })

  }
}

/********************* Get all posts ******************* */

exports.getPost = async (req, res) =>{
    
  const posts = await Post.find();
  try {
    res.status(200).json({ posts });
  } catch (error) {
    console.log("get posts failed", error);
    res.status(403).json({ msg: "get posts failed" });
  }
}


/******************** Update post ************************* */
exports.editPost = async (req, res) =>{
  let { _id } = req.params;
  try {
      await Post.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
      res.status(203).json({ msg: "Post updated successfully" });
  } catch (error) {
      console.log("Post update failed", error);
  res.status(403).json({ msg: "Post update failed" });
  }

}


/********************** Delete product *************************** */

exports.deletePost = async (req, res) =>{
  const { _id } = req.params;
  try {
     await Post.findByIdAndDelete({ _id }) ;
     res.status(200).json({ msg: "Post deleted with success" });
  } catch (error) {
      console.error("Post delete failed", error);
  res.status(402).json({ msg: "Post delete failed" });
      
  }
}