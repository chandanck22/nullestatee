import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
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
