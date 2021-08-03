const express = require('express');
const mongoose = require ('mongoose');
const bodyparser = require('body-parser');
const memory = require('./src/router/memories');
const addMemory = require('./src/router/addMemory');


const app = express();
const port = process.env.PORT || 4500 ;
app.use(bodyparser.urlencoded({extended:true}));
const url = "mongodb://127.0.0.1:27017/memoria";


app.use('/',memory);
app.use('/add',addMemory);


app.listen(port,()=>{console.log("connecting..")});