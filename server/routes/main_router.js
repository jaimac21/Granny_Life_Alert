const express = require("express")
const auth = require("../authUtility.js")
let router = express.Router()
const nodemailer = require('nodemailer');



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
//lphw fcxc gfme zjtw
router.post('/lifeAlert/emailAlert', async(req,res)=>{
    try{
        const nodemailer = require('nodemailer');

        // Using Gmail's SMTP for now to get working prototype
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'clobato@cs.stonybrook.edu',
                pass: 'lphw fcxc gfme zjtw', // APP Password from Gmail SMTP will need to move to dotENV file at some point
            },
        });

        const mailOptions = {
            from: 'clobato@cs.stonybrook.edu',
            to: 'clobato315@gmail.com',
            subject: 'USER has FALLEN',
            text: 'USER has FALLEN at timestamp?',
            // can chuck html content instead with the following:
            // html: '<h1>This is a test email</h1>',
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        console.log("Sending a email alert")
        res.json("Sent email alert")
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