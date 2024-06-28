const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db-config');
const userRoutes = require('./routes/user');
const favoriteRoutes = require('./routes/favorite');
const reviewRoutes = require('./routes/review');
const carRoutes  = require('./routes/car')

const fs = require('fs');
const path = require('path');

// const { userProfile } = require('./controllers/userProfile');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User routes
app.use('/api', userRoutes);

// Favorite routes

// app.use('/api', userProfile);

app.use('/api', carRoutes);
app.use('/uploads', express.static('uploads'));

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

db.sync({ alter:true }).then(connection => {
  app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
}).catch(err => {
  console.log("Error connecting to the database, cannot start server");
  console.log(err);
});
