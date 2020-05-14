const express = require('express')
var router = express.Router()

var {PostMessage} = require('../models/postMessage')

router.get('/', (req,res) => {
    PostMessage.find((err,docs) => {
        if(!err) res.send(docs)
        else console.log('Error while retrieving all records:' + JSON.stringify(err,undefined,2))
    })
})


router.post('/', (req,res) => {
    var newRecord = {
        tittle: req.body.title,
        message: req.body.message
    }

    newRecord.save()
})

module.exports = router