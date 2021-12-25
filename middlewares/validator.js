const {check, validationResult} = require('express-validator');


exports.registerRules = () => [
check("email", "Invalid email").isEmail(),
check("password", "At least you need five caracters").isLength({min : 5}),
]

exports.validator = (req, res, next)=>{
   const errors = validationResult(req);
   errors.isEmpty() ? next() : res.status(400).json({errors: errors}) 
};