const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/',(req, res) => {
    res.send('we are on home');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true },
{ useUnifiedTopology: true },
()=>console.log('connected to DB'));

//listening to server
app.listen(PORT, ()=>{
    console.log('servidor Iniciado na porta '+ PORT)}
);