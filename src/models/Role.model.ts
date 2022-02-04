import { RoleModel } from './../Types/Admin';
import mongoose from 'mongoose';

type IRoleModel = RoleModel & mongoose.Document;

const RoleModel = new mongoose.Schema(
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
        key: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Roles = mongoose.model<IRoleModel>('roles', RoleModel);
export default Roles;
