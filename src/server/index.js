var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

let data = {}

app.get('/getting', function (req, res){
    console.log('getting')
    console.log(data)
    res.send(data)
})

app.post('/posting', function (req, res){
    console.log(process.env.API_ID)
    console.log(process.env.API_KEY)
    let x = req.body.formText
    console.log(x)
    textapi.sentiment({
        text: x,
        mode: 'document',
    }, function(error, response) {
        console.log(error)
        if (error === null) {
          console.log(response)
          data = response
          const res = 'it worked'
          return res
        }
    })
})
    /*
app.post('/posting', function (req, res){
    console.log(process.env.API_ID)
    console.log(process.env.API_KEY)
    let x = req.body.formText
    console.log(x)
    textapi.hashtags({
        url: x
    }, function(error, response) {
        console.log(error)
        if (error === null) {
            console.log(response)
            data.push(response)
        }
    })

}) */

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
