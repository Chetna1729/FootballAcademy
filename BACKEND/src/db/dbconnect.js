import mongoose from "mongoose";
 

//email with 999 youtube user1 
const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        
        console.log(` mongobd connected !! db host : ${connectionInstance.connection.host}
        `);
        
    } 
    catch (error) {
        console.log("mongo connection failed: " + error);
        process.exit(1);
        
    }
}
export default connectDB