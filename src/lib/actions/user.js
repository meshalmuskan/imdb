import User from '../models/user.model';
import { connect} from '../mongodb/mongoose';
export const createOrUpdateUser = async(
    id,
    first_name,
    last_name,
    image_url,
    email_addresses
)=>{
    try{
        await connect();
        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    ProfilePicture: image_url,
                    email: email_addresses[0].email_addresses,

                },

            },
            {upsert: true, new: true}
        );
        return user;

    }
    catch (error) {
        console.error('Error creating or updating user', error);
    }
};
export const deleteUser = async (id) => {
    try{
        await connect();
        await User.findOneAndDelete({clerkId: id});

    }catch (error) {
        console.error('Error deleting user', error);
    }
}