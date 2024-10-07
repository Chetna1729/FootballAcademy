import express from 'express';
// import cookieParser from './cookieParser.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js'
import teamRoute from './routes/team.route.js'
import playerRoute from './routes/player.route.js'

dotenv.config();

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
    origin: ['*'],
    credentials: true
}
app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true
}));

const PORT = process.env.PORT || 4000;

// Api
app.use("/api/v1/user", userRoute);
app.use("/admin/team", teamRoute);
app.use("/admin/player", playerRoute);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})