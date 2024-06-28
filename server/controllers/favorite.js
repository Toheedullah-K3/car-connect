const { Favorite } = require('../models/favorite');
const { Car } = require('../models/car');

const addFavorite = async (req, res) => {
    try {
        const { carId } = req.body;
        const userId = req.userId;

        const favorite = await Favorite.create({ userId, carId });
        res.status(201).json(favorite);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getFavorites = async (req, res) => {
    try {
        const userId = req.userId;
        const favorites = await Favorite.findAll({ where: { userId }, include: Car });
        res.status(200).json(favorites);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addFavorite,
    getFavorites,
};
