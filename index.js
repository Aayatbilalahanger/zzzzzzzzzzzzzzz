const express = require('express');
const app = express();
app.get('',(req,res)=>{
res.end("<h2>hello this is home page</h2>");
});
app.get('./index.html',(req,res)=>{
    res.end("this is about page");
})
app.get('/gallery',(req,res)=>{
    res.end("this is gallery page");
})
app.listen(5010);