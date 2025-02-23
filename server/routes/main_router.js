const express = require("express")
const auth = require("../authUtility.js")
let router = express.Router()
const axios = require("axios");  // Import axios for API requests
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

async function sendWhatsAppMessage(to, message) {
    const WHATSAPP_PHONE_ID = "607122619141872";
    const WHATSAPP_ACCESS_TOKEN = "EAAOIjBfHfGoBO88OJmg8DcIroNvoAZBcmGbQlqJPqFuuVS7sEGcBXdCEJR6ZAri4eDyBe5l7aFhXqSOGBQK8i8zHMO60upRQPhz11WQgMLksVv4TkZAW73ZAzOzVRBDjLO101ZCJGcGFkUCiWcOPoOt4E5d4PQZAt1541DKhXEQTopDHJMBhbGO35z0Bnq46g1blA6Lo3kOlC5EtJaaz2JXloHrFvtd6S0v5wZD";
    const url = `https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_ID}/messages`;

    const data = {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: { body: message }
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                "Authorization": `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
                "Content-Type": "application/json"
            }
        });

        console.log("WhatsApp API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error sending WhatsApp message:", error.response ? error.response.data : error.message);
        return null;
    }
}

router.post('/lifeAlert/fallAlert', async(req,res)=>{
    try{
        console.log("Hello")
        //As long as there are the
        const userPayload = req.body; //user Email Address
        //payload should contain the location and the email address as keys
        console.log(userPayload)

        const userQuery = await User.findOne({email: userPayload.email})
        const userEmails = userQuery.emailContacts;
        const userNumbers = userQuery.smsContacts;
        console.log(userQuery)
        // WhatsApp API Credentials (Stored in .env)

        if (userNumbers){
            //send whatsApp Messages if they have sms emergency contacts
            console.log("Sent call alert")
            for (let phone of userNumbers) {
                console.log("Alert")
                await sendWhatsAppMessage(phone, `${userQuery.firstName} ${userQuery.lastName} has FALLEN. Please contact emergency services immediately.`);
                // await sendWhatsAppMessage(phone, `Chris Lobato has FALLEN. Please contact emergency services immediately.`);
                console.log("Alert was sent")
            }
        }

        if (userEmails){
            // send emails if they have email emergency contacts
            const nodemailer = require('nodemailer');
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
                    to: email,//clobato315@gmail.com
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
            console.log("Sent email alert")

        }

        
        res.status(201).json("Finished Sending")

    } catch (err){

    }

});

module.exports = router