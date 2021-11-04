//   check if email already exists
//   password hash 
//   email lowercase ayasahmad63@ggmail.com /AYASAHMAD63@GMAIL.COM
//  save

const User = require('../models/user');
const bcrypt = require('bcryptjs');

const saltRounds = 10;
const register = async (req, res) => {

    const { email, password } = req.body;
    try {
        const alreadyExists = await User.findOne({ where: { email } });
        if (alreadyExists) {
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);


        const newUser = new User({ email: email.toLowerCase(), password: hash, fullName: "abc" });
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);

    } catch (err) {
        console.error(err);
    }
}

module.exports = register;