const { Sequelize } = require('sequelize');


const db = new Sequelize('car-connect','root','admin', {
     host:'localhost',
     dialect:'mysql'
})



db.authenticate().
then(connection => console.log("connected db")).
catch(err => console.log(err,"err connecting db"))

module.exports = db;