const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Todos los autores');
});

router.post('/', (req, res) => {
    res.send('Creando un autor');
});



module.exports = router;
