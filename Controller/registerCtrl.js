var register=require('../model/register');


exports.CreateRegister=function(req,res)
{
  var entry=new register(
{
  userName:req.body.userName ,
  userPassword:req.body.userPassword
});

  entry.save();

res.render('succ.html')


}

exports.newRegister=function(req,res){


res.render('register.html');

}


exports.logingin=function(req,res){


  userName=req.body.userName;
  userPassword=req.body.userPassword;

  register.findOne({userName:userName,userPassword:userPassword},function(err,register){
  if(err){
  console.log(err);
  res.render('loginagain.html');
  }
    if(!register){
      res.render('loginagain.html');
          }

            res.render('logged.html');

  })

}
