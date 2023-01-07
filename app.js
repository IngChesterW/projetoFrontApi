
const request = require("request");
import express from 'express';
import { engine } from 'express-handlebars';
const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    layout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname:'.hbs',
}));

app.get("/",(req,res)=>{
   request("https://jsonplaceholder.typicode.com/users",(err,response,body)=>{
       if (!err){
           const users = JSON.parse(body);
           res.render("home",{ 
               layout:"main",
               users:users
           });
       }
   })
}); 
app.listen(3000);

