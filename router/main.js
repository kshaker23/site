var express = require('express');
var  registerCtrl=require('../Controller/registerCtrl');
var  portfolioCtrl=require('../Controller/portfolioCtrl');



var multer = require('multer');
var upload = multer({ dest: 'uploads/'});
var fs = require("fs");
//

// var db     =   require("mongoose");
// db.connect("mongodb://localhost:27017/registerdb");
// // //
// var conn = db.connection;
// var gfs;
let portfolio = require('../model/portfolio');


//
// var Grid = require("gridfs-stream");
// Grid.mongo = db.mongo;
//   gfs = Grid(conn.db);
module.exports = function(app)
{


     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
    app.get('/register',function(req,res){
      res.render('register.html');
      registerCtrl.newRegister(req,res);
   });
   app.post('/newRegister',function(req,res){
     registerCtrl.CreateRegister(req,res);

  });
  app.post('/login',function(req,res){

         registerCtrl.logingin(req,res);

  });

   app.get('/login',function(req,res){
      res.render('login.html');
  });
  app.post('/logged',upload.any(),function(req,res,next){
    portfolioCtrl.CreatePortfolio(upload.any(),req,res);
    });
    app.post('/logged2',upload.any(),function(req,res,next){
      portfolioCtrl.CreatePortfolio2(upload.any(),req,res);
      });
    app.get('/summary', function(req, res){
        portfolioCtrl.getAllportfolio(req,res);
});









}
