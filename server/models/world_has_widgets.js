const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'worldHasWidgets',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idWorld: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idWidgets: {
            type: Sequelize.INTEGER,
            allowNull: false
        }       
    }
)