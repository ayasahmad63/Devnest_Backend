const { emailValidate,
    passswordValidate } = require('../utils/validate');

const registerInitialCheck = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    if (
        typeof email === 'string' &&
        typeof passsword === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        confirmPassword === password &&
        emailValidate(email) &&
        passswordValidate(password)
    ) {
        next();
    }
    res.status(401).send("Initial check fail");


}

module.export = registerInitialCheck;