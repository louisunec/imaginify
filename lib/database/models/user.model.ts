import { Schema } from 'mongoose';
import { model, models } from 'mongoose';


export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
    userName: string;
    clerkId: string;
    creditBalance: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
    userName: { type: String, required: true, unique: true},
    planId: { type: String, required: true, default: 1 },
    creditBalance: { type: Number, required: true, default: 10 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = models?.User || model('User', UserSchema);

export default User;