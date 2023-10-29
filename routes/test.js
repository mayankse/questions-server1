var express=require('express');
var router=express.Router();

/**
 * @swagger
 * /test/query-params?name=Sachin&loc=Mumbai:
 *   get:
 *     summary: Returns a simple message.
 *     responses:
 *       200:
 *         description: A successful response with the message.
 */   
router.get("/query-params",(req,res,next)=>
{
    const {name,loc}=req.query;
    const data=`My name is ${name} and my location is ${loc}`;
    res.status(200).send(data);
});
router.put("/path-params/:name/:loc",(req,res,next)=>
{
    const {name,loc}=req.params;
    const data=`My name is ${name}, I am from ${loc}.`;
    res.status(200).send(data);

});
router.delete("/req-headers",(req,res,next)=>
{
    const {name,loc}=req.headers;
    const data=`My name is ${name}, I am from ${loc}`;
    res.status(200).send(data);
})
module.exports=router;
