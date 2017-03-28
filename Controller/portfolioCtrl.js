var portfolio=require('../model/portfolio');
 var multer = require('multer');
 var upload = multer({ dest: 'uploads/'});
  var type=upload.single('ufile');
  var fs=require('fs');



exports.CreatePortfolio=function(type,req,res)
{
  var entry=new portfolio(
{
  portName:req.body.portName,
  Link:req.body.Link
});

  type=upload.single(req.files);

console.log(req.files);
  entry.save();

 //res.render('index.html')

}
exports.getAllportfolio=function(req, res){

      portfolio.find(function(err, portfolio){

          if(err)
              res.render('nosumm');
          else

             res.render('summary', {portfolio
             });

      })
  }
exports.CreatePortfolio2=function(type,req,res)
{
  var entry=new portfolio(
{
  portName:req.body.portName,
  Link:req.body.Link
});

  type=upload.single(req.files);

console.log(req.files);
  entry.save();

 res.render('confirmation.html')

}
