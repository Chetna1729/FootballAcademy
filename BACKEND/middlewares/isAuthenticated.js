import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js';

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if(!token) {
            return res.status(401).json({ 
                message: 'Unauthorized', 
                success: false
            });
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        if(!decode) {
            return res.status(401).json({
                message: 'Invalid token',
                success: false
            })
        }
        req.user = await User.findById(decode.userId);
        next();
    } catch(error) {
        console.log(error);
    }
}

export default isAuthenticated;