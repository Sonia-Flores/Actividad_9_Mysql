const selectAllPosts = () => {
    return db.query('SELECT p.*, a.Nombre AS NombreAutor, a.Email AS EmailAutor, a.Imagen AS ImagenAutor FROM Posts AS p INNER JOIN Autores AS a ON p.idAutor = a.id')
}
const selectPostById = (postId) => {
    return db.query('SELECT p.*, a.Nombre AS NombreAutor, a.Email AS EmailAutor, a.Imagen AS ImagenAutor FROM Posts AS p INNER JOIN Autores AS a ON p.idAutor = a.id WHERE p.id = ?', [postId])
}
const selectPostsByAutorId = (autorId) => {
    return db.query('SELECT p.*, a.Nombre AS NombreAutor, a.Email AS EmailAutor, a.Imagen AS ImagenAutor FROM Posts AS p INNER JOIN Autores AS a ON p.idAutor = a.id WHERE a.id = ?', [autorId])
}

const insertPost = ({Titulo, Descripcion, FechaCreacion, Categoria, IdAutor}) => {
    return db.query(
        'INSERT INTO Posts (Titulo, Descripcion, FechaCreacion, Categoria, IdAutor) VALUES (?,?,?,?,?)', [Titulo, Descripcion, FechaCreacion, Categoria, IdAutor]); 

}



module.exports = {
    selectAllPosts,
    selectPostById,
    selectPostsByAutorId,
    insertPost
    
}