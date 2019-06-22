const express = require('express')
const image = express.Router()
const cors = require('cors')

const Image= require("../models/Image")
image.use(cors())

image.post('/upload', (req, res) => {
    const imageData = {
        base64: req.body.base64
    }
    Image.findOne({
        where: {
            base64: req.body.base64
        }
    })
        .then(image => {
            Image.create(imageData)
                .then(image => {
                    res.send('Sucess')
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
module.exports = image