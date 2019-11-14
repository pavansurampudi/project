var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const defaultRouter = require('./routers/default.router');
const productRouter = require('./routers/products.router');
const addressRouter = require('./routers/address.router');
const boxesrouter = require('./routers/boxes.router');
const userrouter = require('./routers/useraddress.router');
const loginrouter = require('./routers/logins.router');
const devrouter = require('./routers/dev.router');
const jobrouter = require('./routers/job.router');
const recruitrouter = require('./routers/recruiter.router');
app.use(bodyParser.json());
app.use('/', defaultRouter);
app.use('/api', productRouter);
app.use('/api', addressRouter);
app.use('/api', boxesrouter);
app.use('/api', userrouter);
app.use('/api', loginrouter);
app.use('/api', devrouter);
app.use('/api', jobrouter);
app.use('/api', recruitrouter);
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dl-db', (error, res) => {
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