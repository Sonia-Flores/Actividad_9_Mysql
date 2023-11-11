### RUTAS AUTORES ##

# Obtener todos los autores:
GET /api/autores

# Obtener un autor mediante su id:
GET /api/autores/:IDAUTOR

# Crear un autor:
POST /api/autores/create 


### RUTAS POSTS ##

# Obtener todos los posts:
GET /api/posts

# Obtener un post mediante su id:
GET /api/post/:IDPOST

# Obtener todos los posts escritos por un autor:
GET /api/posts/:IDAUTOR 

# Crear un post:
POST /api/posts/create 
