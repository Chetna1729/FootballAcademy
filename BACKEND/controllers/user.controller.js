import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs"
import crypto from "crypto";
import { User } from "../models/user.model.js";
import { sendEmail } from '../utils/sendEmail.js';

// Registration
export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({
        message: "Please fill in all fields.",
        success: false,
      });
    }
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists.",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({
      userName,
      email,
      password: hashedPassword
    })

    res.status(201).json({
      message: "User registered successfully.",
      success: true,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user.",
      success: false,
    }); 
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ) {
      return res.status(400).json({
        message: "Please fill in all fields.",
        success: false,
      })
    }
    let user = await User.findOne({ email });
    if(!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      })
    }
    const tokenData = {
      userId: user._id
    }
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, ({ expiresIn: '1d' }))
    user = {
      _id: user._id,
      userName: user.userName,
    }
    return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
      message: `Welcome ${user.userName}`,
      success: true
    })
  }
  catch(error) {
    console.error("Login Error:", error);
    res.status(500).json({
      message: "Failed to login user.",
      success: false,
    })
  }
}

// Logout
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token","", {maxAge: 0}).json({
      message: "Logged out successfully",
      success: true
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to logout.",
      success: false,
    })
  }
}

// Get Profile
export const getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if(!user) {
      return res.status(404).json({
        message: "User not found",
        success: false
      })
    }
    res.status(200).json({
      message: "User profile retrieved successfully",
      success: true,
      user
    })
  } catch (error) {
    console.log(error);
  }
} 

// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const { userName } = req.body;
    if(!userName) {
      return res.status(500).json({
        message: "Please fill all fields",
        success: false
      })
    }

    const user = await User.findById(req.user._id);
    if(!user) {
      return res.status(500).json({
        message: "User not found",
        success: false
      })
    }

    // Updating Data
    user.userName = userName;
    await user.save();

    return res.status(200).json({
      message: "Updated successfully",
      user,
      success: true
    })

  } catch (error) {
    res.status(500).json({
      message: "Failed to Update.",
      success: false,
    })
  }
}

// Forget Password
export const forgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
      res.status(500).json({
        message: "Email Not Found",
        success: false,
      })
    }
    // Generate token here...
    const resetToken = await user.getResetToken();
    await user.save();

    const url = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;
    const message = `Click on the link to reset your password. ${url}. if you have not requested then please ignore.`
    // Send token via email
    await sendEmail(user.email, "Football Academy Reset Password", message)

    res.status(200).json({
      message: `Reset token sent to your ${user.email}`,
      success: true
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Failed to Update Password.",
      success: false,
    })
  }
}


// Reset Password
export const resetPassword = async(req, res, next) => {
  try {
    const { token } = req.params;
    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordTokenExpire: { $gt: Date.now() }
    })

    if(!user) {
      console.log(resetPasswordToken)
      return res.status(400).json({
        message: "Invalid token or expired token",
        success: false
      })
    }
    // Reset password here...
    const newPassword = await bcrypt.hash(req.body.password, 10);
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save();

    res.status(200).json({
      message: "Password changed successfully",
      success: true,
      token
    }) 
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Failed to Update Password.",
      success: false,
    })
  }
}