const express = require('express')
const worldHasWidgets = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const WorldHasWidgets = require("../models/worldHasWidgets")
worldHasWidgets.use(cors())

worldHasWidgets.get('/findById', (req, res) => {
    WorldHasWidgets.findOne({
        where: {
            id: req.body.id
        }
    })
    .then(worldHasWidgets => {
        res.json(worldHasWidgets)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

worldHasWidgets.get('/findAll', (req, res) => {
    WorldHasWidgets.findAll({
    })
    .then(worldHasWidgets => {
        res.json(worldHasWidgets)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = worldHasWidgets