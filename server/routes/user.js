const router = require('express').Router();
const { signup, login, getAllUsers, verifyCode } = require('../controllers/user');
// const { userProfile } = require('../controllers/userProfile')

router.post('/auth/signup',signup);
router.post('/auth/login',login);
router.post('/auth/verifyCode',verifyCode);
router.get('/auth/users',getAllUsers)
// router.get('/api/user-profile', userProfile);

module.exports = router;