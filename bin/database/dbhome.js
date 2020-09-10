var mysql = require('mysql');
var con = mysql.createPool({
    "host" : ".com",
    "user" : "",
    "password": "",
     "database" : ""   });



    con.getConnection(function(err) {
        if (err)  console.log("err connect db",err);
        else{
        console.log("my sql Connected!");
        }
      });
      
 



function getAllItems(){
   return new Promise((resolve,reject)=>{
   
     var sql = "select * from proudcts where sold=0 "; 
     con.query(sql, function (err, result) { if (err) throw err;  resolve(result) ; });
   })
   }
   


function getDeterminedItems(cate){
   return new Promise((resolve,reject)=>{
   
     var sql = "SELECT * FROM `proudcts` WHERE sold=0 AND cate ='"+cate+"' "; 
     con.query(sql, function (err, result) { if (err) throw err;  resolve(result) ; });
   })
   
   }

   

   module.exports.con=con;
module.exports.getAllItems=getAllItems;
module.exports.getDeterminedItems=getDeterminedItems;
