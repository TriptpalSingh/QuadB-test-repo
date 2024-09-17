const mongoose = require('mongoose')
const schema = mongoose.Schema


const currencyModel = new schema({
    name: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    buy: {
        type: String,
        required: true
    },
    sell: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    baseUnit: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Currency', currencyModel, "Currencies")