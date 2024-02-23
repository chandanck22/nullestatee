import { errorHandler } from '../utils/error.js';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const test = (req, res) => { 
  res.send('Hello World!');
};

export const updateUser = async (req, res) => {
  if (req.user.id !== req.params.id) {
    // return next(errorHandler(403, 'You can only update your account'));
    return res.status(403).json({ message: 'You can only update your account' });
  }
  try {
    if(req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 12);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    
    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);

  } catch (error) {
    return next();
  }
};