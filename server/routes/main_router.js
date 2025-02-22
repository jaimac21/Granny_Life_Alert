const express = require("express")
const auth = require("../authUtility.js")
let router = express.Router()



//Get Requests






router.get('/contacts/:_user', auth.verify, async(req,res)=>{
    try{
        //Place Holder
    }
    catch (error) {
        //We do this just incase there is some kind of error the server wont just die instantly
        console.log(error);
    }
});



//Post Requests
router.post('/lifeAlert/smsAlert', async(req,res)=>{
    try{
        console.log("Testing if this route works")
        res.json("Hello")
    }catch (err) {
        console.log(err)
    }

});

router.post('/lifeAlert/emailAlert', async(req,res)=>{
    try{
        console.log("Sending an Email Alert")
        res.json("Hello")
    } catch (err){

    }

});

router.post('/lifeAlert/callAlert', async(req,res)=>{
    try{
        console.log("Sending a call alert")
        res.json("Hello")

    } catch (err){

    }

});

module.exports = router