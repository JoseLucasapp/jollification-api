import mongoose from "mongoose";
import { createHash } from "../../helpers/utils";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 5,
        required: true,
        unique: true,
    },
    password: {
        min: 6,
        max: 10,
        type: String,
        required: true,
        set: createHash,
    },
    friends_id: {
        type: Array,
        default: []
    },
    profile_pic: {
        type: String,
    },
    is_private: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.__v
                return ret
            },
        },
    },
)

export default mongoose.model('users', userSchema)