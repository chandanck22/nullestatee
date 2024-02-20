import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import { errorHandle } from '../utils/error.js';


export const signup = async (req, res, next) => { 
  const { username, email, password } = req.body;
  
  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }

    // If not, hash the password and create a new user
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User ({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, message: 'New user created!' });
  } catch (error) {
    next(error);
  }  
};


export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User .findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username' });
    } 
    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    // Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' });
    
    const { password: userPassword, ...userWithoutPassword } = user._doc;
    res.cookie('token', token, { httpOnly: true }).status(200).json(userWithoutPassword);
  }
  catch (error) {
    next(error);
  }
};