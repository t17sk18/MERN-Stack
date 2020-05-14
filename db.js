const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/postManagerDB', {useNewUrlParser:true, useUnifiedTopology:true},
 err => {
     if (!err)
        console.log('MongoDB connection Successful')
    else
        console.log('Error while connection to MongoDB' + JSON.stringify(err, undefined, 2))

 })