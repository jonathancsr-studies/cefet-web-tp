const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'widgetsHasAtt',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idAtt: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idWidget: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }

    }
)