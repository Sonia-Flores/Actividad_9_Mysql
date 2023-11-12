const AutorModel = require('../models/autor.model');

const getAllAutores = async (req, res) => {
    try{
        const [result] = await AutorModel.selectAllAutores()
        console.log(result);

        res.json(result);

    } catch(error){
        res.json({error: error.message});
    }
}

const insertAutor = async (req, res) => {
   try {
        const [result] = await AutorModel.insertAutor(req.body)
        const [autor] = await AutorModel.selectAutorById(result.insertId)

        console.log(autor)
        res.json(autor);

    } catch(error){
        res.json({error: error.message});
    }
}
module.exports = {
    getAllAutores,
    insertAutor
}