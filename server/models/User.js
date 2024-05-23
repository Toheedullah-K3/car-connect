const { DataTypes, STRING } = require("sequelize");
const db = require('../config/db-config')

const User = db.define('User', 
    {
        email: {
            type : DataTypes.STRING,
            primaryKey: true,
            
        },
        username: {
            type : DataTypes.STRING,
            allowNull: false
        },
        password: {
            type : DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true
    })


    
module.exports = {
    User
}