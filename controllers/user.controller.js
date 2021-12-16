const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ********************* USER REGISTER  *****************************
exports.userRegister = async (req, res) => {
    const newUser = new User({ ...req.body });
    const user = await User.findOne({email : newUser.email})

  if(user) {return res.status(404).json({msg: "User already exists" })}

  try {

    const salt =  await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newUser.password,salt)
    
    newUser.password = hash;

    await newUser.save();
    res.status(201).json({ msg: "Register sucess" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Register failed" });
  }

}

// ********************* USER LOGIN  *****************************


exports.userLogin = async (req, res) => {

  const {email, password} = req.body
  const user = await User.findOne({email})
    
  if(!user) return res.status(404).json({msg: "Bad credentiel"});

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) return res.status(404).json({msg: "Bad credentiel"});

  try {
    let payload = {
      id : user._id,
      email : user.email,
    };
    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

    res.status(200).json({token: `Bearer ${token}`, user});
  } catch (error) {
    console.log("login error =", error);
    res.status(401).json({msg: "Login user failed"});
  }
};
