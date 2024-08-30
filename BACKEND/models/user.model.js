import mongoose, { Schema } from "mongoose";
import crypto from "crypto"

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordTokenExpire: {
        type: Date,
    },
})

userSchema.methods.getJWTToken = function() {
    return jwt.sign({userId: this._id}, process.env.SECRET_KEY, {expiresIn: "15d"})
}

userSchema.methods.getResetToken = function() {
    const resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash("sha256").update(resetPasswordToken).digest("hex");
    this.resetPasswordTokenExpire = Date.now() + 10 * 60 * 1000;
    return resetPasswordToken;
}

export const User = mongoose.model('User', userSchema);