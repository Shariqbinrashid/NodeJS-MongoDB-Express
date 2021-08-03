const http =require('http');

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');


const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promotionsRouter');
const ledRouter = require('./routes/leadersRouter');
const host='localhost';
const port=3000;


const app=express();

app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.use('/promotions', promoRouter);
  
app.use('/leaders', ledRouter);

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server=http.createServer(app);

server.listen(port,host,()=>{
    console.log("SERVER RUNNING AT PORT 3000");
});
