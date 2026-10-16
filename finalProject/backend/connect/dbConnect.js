import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(["8.8.8.8", "1.1.1.1"])

const dbConnnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://sanjana:sanjana@cluster0.mkaawaz.mongodb.net/sanjana");
        console.log("Database is connected successfully");
        
    } catch (error) {
        console.log(error)
    }
}

export default dbConnnect