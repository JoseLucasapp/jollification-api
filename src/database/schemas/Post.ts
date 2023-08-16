import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    post: {
        type: String,
        min: 3
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'users'
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            delete ret.__v
            return ret
        },
    },
})

export default mongoose.model('posts', postSchema)