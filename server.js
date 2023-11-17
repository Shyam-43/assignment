
const express =require("express");
const app=express();
const path=require("path");



app.get("/html1",(req,res)=>{
    res.sendFile(path.join(__dirname,"main1.html"));
});
app.get("/html2",(req,res)=>{
    res.sendFile(path.join(__dirname,"main2.html"));
});
app.get("/html3",(req,res)=>{
    res.sendFile(path.join(__dirname,"main3.html"));
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
}
)