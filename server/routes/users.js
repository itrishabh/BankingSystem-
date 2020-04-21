var express = require('express');
var router = express.Router();
var mysql=require('mysql');

router.post('/reg-cus', function(req, res) {
  var cusId=req.body.id;
  var name=req.body.name;
  var email=req.body.email;
  var phone=req.body.phone;
  var acno=req.body.acno;
  var pwd=req.body.pwd;

  var con=mysql.createConnection({
    'host':'localhost',
    'database':'bankingdb',
    'user':'root',
    'password':''
  })
  con.connect(function(err,succ){
    if(err){
      res.send('db con error');
    }
    var q="insert into customer (id,name,email,phone,acno,pwd) values('"+cusId+"','"+name+"','"+email+"','"+phone+"','"+acno+"','"+pwd+"')";
    con.query(q,function(e,r){
      if(e){
        res.send(e);
      }
      else{
        res.send(r);
      }
    })
  })
});
router.get('/get-cust',function(req,res){
  
var con=mysql.createConnection({
  'host':'localhost',
  'database':'bankingdb',
  'user':'root',
  'password':'',
})
con.connect(function(err,succ){
  if(err)
  {
    res.send('db con error');
  }
  var q="select * from customer";
  con.query(q,function(e,r)
  {
    if(e)
    {
      res.end(e);
    }
    else
    {
      res.send(r);
    }
  })
})
})
router.get('/edit-cust',function(req,res){
  
  var con=mysql.createConnection({
    'host':'localhost',
    'database':'bankingdb',
    'user':'root',
    'password':'',
  })
  con.connect(function(err,succ){
    if(err)
    {
      res.send('db con error');
    }
    var q="select * from customer";
    con.query(q,function(e,r)
    {
      if(e)
      {
        res.end(e);
      }
      else
      {
        res.send(r);
      }
    })
  })
  })

  router.post('/update-cust',function(req,res){
  
    var id=req.body.id;
  var name=req.body.name;
  var email=req.body.email;
  var phone=req.body.phone;
  var acno=req.body.acno;
  var pwd=req.body.pwd;
     var con=mysql.createConnection({
       'host':'localhost',
       'database':'bankingdb',
       'user':'root',
       'password':'',
     })
     con.connect(function(err,succ){
       if(err)
       {
         res.send('db con error');
       }
       var q="update customer set name='"+id+"','"+name+"','"+email+"','"+phone+"','"+acno+"'+'"+pwd+"' where id='"+id+"'";
       console.log(q);
       con.query(q,function(e,r)
       {
         if(e)
         {
           res.end(e);
         }
         else
         {
           res.send(r);
         }
       })
     })
     })

  router.get('/del-cust',function(req,res){
  
   var cusId= req.query.id;
    var con=mysql.createConnection({
      'host':'localhost',
      'database':'bankingdb',
      'user':'root',
      'password':'',
    })
    con.connect(function(err,succ){
      if(err)
      {
        res.send('db con error');
      }
      var q="delete from customer where id='"+cusId+"'";
      console.log(q);
      con.query(q,function(e,r)
      {
        if(e)
        {
          res.end(e);
        }
        else
        {
          res.send(r);
        }
      })
    })
    })
    //transaction code
    router.post('/get-cust-info',function(req,res)
    {
      var acno=req.body.acno;
      var con=mysql.createConnection({
        'host':'localhost',
        'database':'bankingdb',
        'user':'root',
        'password':'',
      })
      con.connect(function(err,succ){
        if(err)
        {
          res.send('db con error');
        }
        var q="select * from customer where acno='"+acno+"'";
        console.log(q);
        con.query(q,function(e,r)
        {
          if(e)
          {
            res.send(e);
          }
          else
          {
            res.send(r);
          }
        })
      })
    })
    //login
    router.post('/login',function(req,res){
      var id=req.body.id;
      var pwd=req.body.pwd;

      var con=mysql.createConnection({
        'host':'localhost',
        'database':'bankingdb',
        'user':'root',
        'password':'',
      })
      con.connect(function(err,succ){
        if(err)
        {
          res.send('db con error');
        }
        var q="select * from customer where id='"+id+"' and pwd='"+pwd+"'" ;
        console.log(q);
        con.query(q,function(e,r)
        {
          if(e)
          {
            res.send(e);
          }
          else
          {
            res.send(r);
          }
        })
      })
    })
  


module.exports = router;
