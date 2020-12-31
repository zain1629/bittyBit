const model = require("../models/Model");
const open = require('open');


exports.getGeneratedUrl = function (req,res){
    let url = req.body.url;

    let size = getRandomInt(3,9);
    let key  =  makeid(size);
    //let encodedUrl = encodeURIComponent(url);
    
    model.checkDuplicate(key)
    .then((result)=>{
      if(result.length >=1){
         console.log("Data Exists")
         getGeneratedUrl();
      }
      else{
         model.createUrl(url,key);
      }
    })
    .catch(console.log("No Data"))
   // model.createUrl(url,key);

    console.log(key);
    res.send(key);
}

exports.getUrl = function (req,res){

   const token = req.params.token;
   const url =  model.getUrl(token)
   .then((result) => {
      open(result[0].original_url);
     // res.send(result[0].original_url);
   })
}


const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }