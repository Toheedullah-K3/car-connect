const { DataTypes } = require('sequelize');
const sequelize = require('sequelize')
const db = require('../config/db-config')

const Token = db.define('Token', {
    userId: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    otp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    freezeTableName: true,
}
)


module.exports = Token;