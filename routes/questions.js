var express=require('express');
var router =express.Router();
var mongo=require("mongodb");

router.post('/save-que',async(req,res,next)=>
{
    //take the data from req
    const dataObj=req.body.data
    //connect with DB
    const url=  "mongodb+srv://u1:p1@8am1.hwqqcnd.mongodb.net/?retryWrites=true&w=majority";
    const mongoClient=mongo.MongoClient;
    const server=await mongoClient.connect(url);
    const db=server.db('onlinetest1'); 
    const collection=db.collection('questions1');
    //collection.insertOne(dataObj);
    const response=await collection.insertOne(dataObj);
    res.send(response);
    console.log(response);

})

module.exports=router;


