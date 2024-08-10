import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/dbconnect.js';

dotenv.config({

    path : './.env'
    
})
connectDB()
.then(() => {

    app.listen(process.env.PORT || 5500 , () => {
        console.log(`server is running on port : ${process.env.PORT}`);

    })
})

.catch((err) => {

    console.log("mongodb connection failed:" + err);
    
})







