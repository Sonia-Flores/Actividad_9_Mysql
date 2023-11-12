const PostModel = require('../models/post.model');

const getAllPosts = async (req, res) => {
    try{
        const [result] = await PostModel.selectAllPosts()
        console.log(result);

        res.json(result);

    } catch(error){
        res.json({error: error.message});
    }
}

const getAllPostsByAutor = async (req, res) => {
    try {
        const [result] = await PostModel.selectPostsByAutorId(req.params.IdAutor);

        console.log(result);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
};




const insertPost = async (req, res) => {
   try {
        const [result] = await PostModel.insertPost(req.body)
        const [post] = await PostModel.selectPostById(result.insertId)
        console.log(post)
        res.json(post);

    } catch(error){
        res.json({error: error.message});
    }
}
module.exports = {
    getAllPosts,
    getAllPostsByAutor,
    insertPost
}