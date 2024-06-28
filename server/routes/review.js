const router = require('express').Router();
const { addReview, getReviews } = require('../controllers/review');
const authenticate = require('../middleware/authenticate');

router.post('/cars/:carId/reviews', authenticate, addReview);
router.get('/cars/:carId/reviews', getReviews);

module.exports = router;
