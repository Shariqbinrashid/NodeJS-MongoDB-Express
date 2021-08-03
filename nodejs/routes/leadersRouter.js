const express = require('express');
const bodyParser = require('body-parser');

const ledRouter = express.Router();

ledRouter.use(bodyParser.json());

ledRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leraders to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leraders');
})
.delete((req, res, next) => {
    res.end('Deleting all leraders');
});



ledRouter.route('/:leadersId')
.get( (req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.leadersId +' to you!');
})
.post( (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leraders/'+ req.params.leadersId);
})

.put( (req, res, next) => {
  res.write('Updating the promotion: ' + req.params.leadersId + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.leadersId);
});


module.exports = ledRouter;