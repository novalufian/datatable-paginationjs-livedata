const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const con = require('./connection.js');
const _model = require('./model.js');

app.set('view engine', 'ejs');

router.get('/',function(req,res){
  //__dirname : It will resolve to your project folder.
        res.render('index');
});

router.get('/about',function(req,res){
    let limit = req.query.limit;
    let offset = req.query.offset;
    _model.getAll(con,limit, offset, function (r) {
        var resdata = {
            "data" : r.data,
        }
        res.send(resdata)
    })
});

router.get('/sitemap',function(req,res){
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');