const router = require('express').Router();
const { getProfile, updateProfile } = require('../controllers/profile');
const authenticate = require('../middleware/authenticate');

router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);

module.exports = router;
