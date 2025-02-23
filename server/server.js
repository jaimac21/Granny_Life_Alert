const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser'); // similar to cors this enables some convenient functionality for us and will lets us access the cookie portion of a request
const port = 8000;
const mongoose = require('mongoose')
const authRouter = require('./routes/auth_router.js');
const mainRouter = require('./routes/main_router.js');
const User = require('./models/User');


var mongoDB = 'mongodb://127.0.0.1:27017/HopperHacks';
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error',console.error.bind(console,'MongoDB connection error: '));
//Weird that on the last time i ran this it allowed me to make requests without the extra params but this time was required
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],  // ✅ Allows both origins
    credentials: true
}));

app.use(express.urlencoded({ extended: false })); // not sure about this
app.use(express.json());
app.use(cookieParser());
app.use(('/auth',authRouter))// for some reason double parenthesis is needed but i think that in some examples ive seen no double parenthesis
app.use(('/lifeAlert',mainRouter));
app.post('/submit-email', async (req, res) => {
    try {
        const { email, emailContacts, smsContacts, callContacts } = req.body;

        if (!email || !emailContacts.length || !smsContacts.length || !callContacts.length) {
            return res.status(400).json({ error: 'Email and at least one contact method are required' });
        }

        let existingUser = await User.findOne({ email }).exec();

        if (existingUser) {
            existingUser.emailContacts = [...new Set([...existingUser.emailContacts, ...emailContacts])];
            existingUser.smsContacts = [...new Set([...existingUser.smsContacts, ...smsContacts])];
            existingUser.callContacts = [...new Set([...existingUser.callContacts, ...callContacts])];

            await existingUser.save();
            console.log('Updated existing user:', existingUser);
            return res.status(200).json({ message: 'User contacts updated successfully!' });
        }

        const newUser = new User({
            email,
            emailContacts,
            smsContacts,
            callContacts
        });

        await newUser.save();
        console.log('New user stored:', newUser);

        res.status(200).json({ message: 'User information stored successfully!' });

    } catch (error) {
        console.error('Error storing user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, "0.0.0.0", ()=>{
    console.log(`Listening on port ${port}`);
});