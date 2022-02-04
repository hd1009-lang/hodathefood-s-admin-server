import { MemberModel } from './../Types/Admin';
import mongoose from 'mongoose';

type IMemberModel = MemberModel & mongoose.Document;
const MemberSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        membername: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        idRole: {
            type: String,
            ref: 'roles',
        },
    },
    {
        timestamps: true,
    }
);
const Members = mongoose.model<IMemberModel>('members', MemberSchema);
export default Members;
