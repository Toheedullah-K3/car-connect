const express = require('express');
const multer = require('multer');
const path = require('path');
const { addCar, getCars } = require('../controllers/car');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Use the original filename for the uploaded file
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Use multer middleware for handling image uploads

router.post('/cars', upload.single('image'), addCar);
router.get('/cars', getCars);

module.exports = router;


// router.get('/cars/:id', getCarDetails);
