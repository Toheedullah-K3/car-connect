const { Car } = require('../models/car');

const addCar = async (req, res) => {
    try {
        const { make, model, year, price } = req.body;
        const imagePath = req.file.path;
        console.log(imagePath)
        const car = await Car.create({ 
            make, 
            model, 
            year, 
            price,
            image: imagePath
        });

        res.status(201).json(car);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

const getCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addCar,
    getCars,
};
