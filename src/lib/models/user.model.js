 import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';

 const favSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    dateReleased: {
        type: Date,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
 });
 const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fav: {
        type: [favSchema],
        default: [],
    },

 },
    {timestamps: true}
);
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;