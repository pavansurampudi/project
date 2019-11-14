var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const mongoose = require('mongoose');

const emplyeerouter=require('./routers/employee.router');
const recriterrouter=require('./routers/recruiter.router');
app.use(bodyParser.json());
app.use('/api',emplyeerouter);
app.use('/api',recriterrouter);
mongoose.connect('mongodb://localhost:27017/project', (error, res) => {
    if (res) {
        console.log('DB1 Connected successfully');
    }
    else {
        console.log("Something error occuered");
    }
});

app.listen(3000, function () {
    console.log('Server runing on 3000 port');
})