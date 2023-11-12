const AutorModel = require('../models/autor.model');

const getAllAutores = async (req, res) => {
    try{
        const [result] = await AutorModel.selectAllAutores()

        res.json(result);

    } catch(error){
        res.json({error: error.message});
    }
}

const insertAutor = async (req, res) => {
   try {
        const [result] = await AutorModel.insertAutor(req.body)
        const [autor] = await AutorModel.selectAutorById(result.insertId)

        res.json(autor[0]);

    } catch(error){
        res.json({error: error.message});
    }
}
module.exports = {
    getAllAutores,
    insertAutor
}