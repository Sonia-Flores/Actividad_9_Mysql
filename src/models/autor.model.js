const selectAllAutores = () => {
    return db.query('SELECT * FROM Autores')
}

const selectAutorById = (autorId) => {
    return db.query('SELECT * FROM Autores WHERE id = ?', [autorId])
 }

const insertAutor = ({Nombre, Email, Imagen}) => {
    return db.query('INSERT INTO Autores (Nombre, Email, Imagen) VALUES (?,?,?)', [Nombre, Email, Imagen]); 

}



module.exports = {
    selectAllAutores,
    selectAutorById,
    insertAutor
    
}