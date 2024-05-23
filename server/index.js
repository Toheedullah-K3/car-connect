// const express = require('express')
// const cors = require('cors')
// const dotenv = require('dotenv')
// const db = require('./config/db-config')

// const userRouter = require('./routes/user');






// dotenv.config()

// const app = express()
// const port = process.env.PORT

// app.use(express.json())
// app.use(cors())



// // app.use(userRouter);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



// app.get('/login', (req, res) => {
//   res.send('Hello 33!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db-config');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
// db.sequelize.sync().then(() => {

// });
