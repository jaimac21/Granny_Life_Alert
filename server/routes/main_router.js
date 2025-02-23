const express = require("express")
const auth = require("../authUtility.js")
let router = express.Router()
const nodemailer = require('nodemailer');
const User = require("../models/User.js");



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
        const userPayload = req.body; //user Email Address
        //payload should contain the location and the email address as keys


        const nodemailer = require('nodemailer');
        const userQuery = await User.findOne({email: userPayload})
        const userEmails = userQuery.emailContacts;

        // Using Gmail's SMTP for now to get working prototype
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'clobato@cs.stonybrook.edu',
                pass: 'lphw fcxc gfme zjtw', // APP Password from Gmail SMTP will need to move to dotENV file at some point
            },
        });

        userEmails.forEach((email) =>{
            let currentTimeStamp = Date.now().toString();
            const mailOptions = {
                from: 'clobato@cs.stonybrook.edu',
                to: 'clobato315@gmail.com',
                subject: `${userQuery.email} has FALLEN`,
                text: `${userQuery.firstName} ${userQuery.lastName} has FALLEN at ${currentTimeStamp} please contact emergency services`,
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
        })
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