const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

//Middlewares
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());
server.use(cors());

//mapemaneto objeto documento
//ODM

const Client = mongoose.model('Client', {
    name: { type: String, required: true }
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete']);

// Start Server
server.listen(3000)