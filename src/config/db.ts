import mongoose from 'mongoose';

const connectDB = async () => {
    const URI = process.env.MONGO_URL;
    try {
        const conn = await mongoose.connect(URI as string, {});
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};
export default connectDB;
