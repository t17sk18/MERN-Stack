const express = require('express')
var router = require.Router()

var {PostMessage} = require('../models/postMessages')

router.get('/',(req,res) => {
    postMessage.find((err,docs) => {
        if(!err) res.send(docs)
        else console.log('Error while retrieving all records:' + JSON.stringify(err,undefined,2))
    })
})

module.exports = router