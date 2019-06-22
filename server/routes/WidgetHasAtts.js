const express = require('express')
const widgetsHasAtt = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const WidgetsHasAtt = require("../models/WidgetsHasAtt")
widgetsHasAtt.use(cors())

widgetsHasAtt.get('/findById', (req, res) => {
    console.log(req.body.userId)
    WidgetsHasAtt.findOne({
        where: {
            userId: req.body.userId
        }
    })
        .then(widgetsHasAtt => {
            res.json(widgetsHasAtt)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

widgetsHasAtt.get('/findAll', (req, res) => {
    WidgetsHasAtt.findAll({
    })
        .then(widgetsHasAtt => {
            res.json(widgetsHasAtt)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

widgetsHasAtt.post('/findSky', (req, res) => {
    console.log("body id - " + req.body.id_user)
    WidgetsHasAtt.findOne({
        where: {
            id_att: 1,
            id_widget: 1,
            id_user: req.body.id_user
        }
    })
        .then(WidgetsHasAtt => {
            res.json(WidgetsHasAtt)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
module.exports = widgetsHasAtt