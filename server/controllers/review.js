const { Review } = require('../models/review');
const { User } = require('../models/User');

const addReview = async (req, res) => {
    try {
        const { carId, rating, comment } = req.body;
        const userId = req.userId;

        const review = await Review.create({ carId, userId, rating, comment });
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getReviews = async (req, res) => {
    try {
        const { carId } = req.params;
        const reviews = await Review.findAll({ where: { carId }, include: User });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addReview,
    getReviews,
};
