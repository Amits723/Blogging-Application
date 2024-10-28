import mongoose from 'mongoose';


const connection = async (DB_USERNAME,DB_PASSWORD) => {
    const URL = `mongodb+srv://${DB_USERNAME}:${encodeURIComponent(DB_PASSWORD)}@blog-application.4yzdq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Blog-Application`;

    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database:', error);
    }
};

export default connection;
