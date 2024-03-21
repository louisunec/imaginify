'use server'

import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createUser(user: CreateUserParams) {
    try {
        await connectToDatabase();

        const newUser = await User.create(user);

        return newUser.toJSON();
    } catch (error) {
       handleError(error);
    }
}

// READ
export async function getUserById(id: string) {
    try {
        await connectToDatabase();

        const user = await User.findOne({ clerkId: id });

        if (!user) throw new Error("User not found");

        return user.toJSON();
        } catch (error) {
            handleError(error);
        }
    }


// UPDATE
export async function updateUserById(clerkId: string, user: UpdateUserParams) {
    try {
        await connectToDatabase();

        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true });

        if (!updatedUser) throw new Error("User update failed");
        
        return JSON.parse(JSON.stringify(updatedUser));
        } catch (error) {
            handleError(error);
        }
    }


// DELETE
export async function deleteUser(clerkId: string) {
    try {
        await connectToDatabase();

        // Find user by clerkId and delete
        const userToDelete = await User.findOne({clerkId});

        if (!userToDelete) {
            throw new Error("User not found");
        }

        // Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath("/");

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;

    } catch (error) {
        handleError(error);
    }
}

