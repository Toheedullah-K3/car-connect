const router = require('express').Router();
const { addFavorite, getFavorites } = require('../controllers/favorite');
const authenticate = require('../middleware/authenticate');

router.post('/favorites', authenticate, addFavorite);
router.get('/favorites', authenticate, getFavorites);

module.exports = router;
