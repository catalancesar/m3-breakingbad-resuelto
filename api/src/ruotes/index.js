const { Router } = require("express");
const router = Router();

//Traer la lógica
const {
    getQuotes,
    getCharacters,
    addCharacter,
    getCharacterById,
    getEpisodes,
    getEpisodesById,
    changeCharacter,
    deleteCharacter
} = require('../controllers');

// Aqui crearemos nuestras rutas
router.get('/quote', getQuotes)
router.get('/characters', getCharacters)
router.post('/characters', addCharacter)
router.get('/characters/:id', getCharacterById)
router.get('/episodes', getEpisodes)
router.get('episodes/:id', getEpisodesById)
router.put('/characters/:id', changeCharacter);
router.delete('/characters', deleteCharacter);

module.exports = router;
