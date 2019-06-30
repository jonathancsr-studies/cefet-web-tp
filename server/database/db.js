
const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize('tpweb', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db