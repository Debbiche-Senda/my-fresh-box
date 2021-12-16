const User = require("../models/User");
const bcrypt = require("bcryptjs")


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
