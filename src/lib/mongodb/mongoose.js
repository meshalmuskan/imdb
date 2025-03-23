import mongoose from 'mongoose';
let initialized = false;
export const connect =async () => {
    mongoose.set('strictQuery', true);
    if(initialized) {
        console.log('Already connected to MongoDB');
        return;

    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next-imdb-clerk',
            useNewurlParser: true,
            useUnifiedTopology: true,
    });
    initialized = true;
    console.log('Connected to MongoDB');
    }catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}