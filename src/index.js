const express = require('express');
const app = express();
var cors = require('cors');
const { getUsers } = require('./controllers/index.controller');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require('./routes/index'));
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));


app.use( (req, res, next) => {

    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });


app.listen(3000);



// routes





