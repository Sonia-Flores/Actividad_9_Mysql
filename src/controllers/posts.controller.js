const PostModel = require('../models/post.model');

const getAllPosts = async (req, res) => {
    try{
        const [result] = await PostModel.selectAllPosts()

        res.json(result);

    } catch(error){
        res.json({error: error.message});
    }
}


const getAllPostsByAutor = async (req, res) => {
    try {
        const { IdAutor } = req.params;
        const [result] = await PostModel.selectPostsByAutor(IdAutor);
        const elements = [];

        if (!result || result.length === 0) {
           
            const data = {
                autor: {
                    Id: IdAutor
                },
                posts: [], 
            };
            elements.push(data);
        } else {
           
            result.forEach((post) => {
                const element = elements.find((autor) => autor.autor.Id === post.IdAutor);

                if (element) {
                
                    const postData = {
                        Id: post.Id,
                        Titulo: post.Titulo,
                        Descripcion: post.Descripcion,
                        FechaCreacion: post.FechaCreacion,
                        Categoria: post.Categoria,
                    };

                   
                    element.posts.push(postData);
                } else {
                    
                    const postData = {
                        Id: post.Id,
                        Titulo: post.Titulo,
                        Descripcion: post.Descripcion,
                        FechaCreacion: post.FechaCreacion,
                        Categoria: post.Categoria,
                    };

                    const data = {
                        autor: {
                            Id: post.IdAutor,
                            Nombre: post.NombreAutor,
                            Email: post.EmailAutor,
                            Imagen: post.ImagenAutor,
                        },
                        posts: [postData], 
                    };

                    elements.push(data);
                }
            });
        }

        res.json(elements);
    } catch (error) {
        res.json({ error: error.message });
    }
};

const insertPost = async (req, res) => {
   try {
        const [result] = await PostModel.insertPost(req.body)
        const [post] = await PostModel.selectPostById(result.insertId)
       
        res.json(post[0]);

    } catch(error){
        res.json({error: error.message});
    }
}
module.exports = {
    getAllPosts,
    getAllPostsByAutor,
    insertPost
}