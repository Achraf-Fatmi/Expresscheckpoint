const res = require("express/lib/response");

let date = new Date();

let  time =date.getHours();
console.log(time)

let day = date.getDay ()
console.log (day);


function logger(req,res,next){
    if(time>9 && time<17 && day>0 && day<6){
    next()
}else{
    res.send('<h1>We are closed at this time</h1>')
}}

module.exports = logger;

