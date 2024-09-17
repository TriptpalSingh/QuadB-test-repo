const express  = require('express')
const cors = require('cors')
const axios = require('axios')
const connect = require('./db')
require('dotenv').config()

const currencyModel = require('./models/currency')





const app = express()
app.use(cors())
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connect()


app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/getCurrencies', (req, res)=>{
    info = req.body?.data
    axios({
        method: 'GET',
        url: `https://api.wazirx.com/api/v2/tickers`,
        
    }).then((response)=>{
        //console.log(response.data)
        res.send(response.data)
    }).catch((err)=>{
        res.send(err)
    })
    //res.send("something unexpected happened")
})

app.post('/updateDb', async (req, res)=>{
    const delCheck = await currencyModel.deleteMany()
    Object.entries(req.body).map(async (obj)=>{
        const newEntryDb = new currencyModel({
            name: obj[1].name,
            last: obj[1].last,
            buy: obj[1].buy,
            sell: obj[1].sell,
            volume: obj[1].volume,
            baseUnit: obj[1].base_unit
        })
        newEntryDb.save()
    })
    res.send("done")
})



const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
