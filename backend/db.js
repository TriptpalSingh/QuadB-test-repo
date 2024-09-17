const mongoose = require('mongoose')

function connect(){
    const uri = process.env.MONGODB_URI 
    mongoose.connect(uri)
       .then(() => console.log('MongoDB connected...'))
       .catch(err => console.error('Could not connect to MongoDB:', err))
}


module.exports = connect