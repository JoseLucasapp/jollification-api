import { PostEntitie } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostRepository";
import Post from "../schemas/Post";
import User from "../schemas/User";

export class IPostMongoRepository implements IPostRepository {
    async save(data: PostEntitie): Promise<boolean> {
        try {
            const post = new Post(data)
            await post.save()
            return true
        } catch (error) {
            return false
        }
    }

    async find(query: any): Promise<PostEntitie[]> {
        const filter = {}

        const pageOptions = {
            page: parseInt(query.page as string) || 0,
            limit: parseInt(query.limit as string) || 10,
        }
        if (query.type === 'user') {
            if (query.userId) Object.assign(filter, { user_id: query.userId })
        }
        if (query.type === 'friends') {
            const userFriends = await User.findById(query.user_id).select('friends_id')

            const friendsPosts = await userFriends?.friends_id.map(async (friend) => {
                const posts = await Post.find({ userId: friend }).skip(pageOptions.page * pageOptions.limit)
                    .limit(pageOptions.limit).sort('-date')

                return posts
            })

            if (friendsPosts?.length) {
                return friendsPosts
            }

            return []

        }
        if (query.type === 'all') {
            const notBlockedUsers = await User.find({ is_private: false }).select('-password')

            const notBlockedPosts = await notBlockedUsers.map(async (notPrivate) => {
                const posts = await Post.find({ userId: notPrivate._id }).skip(pageOptions.page * pageOptions.limit)
                    .limit(pageOptions.limit).sort('-date')

                return posts
            })

            if (notBlockedPosts.length) return notBlockedPosts

            return []
        }

        const postData = await Post
            .find(filter)
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit).sort('-date')

        return postData
    }

    async findById(id: string): Promise<PostEntitie | null> {
        const post = await Post.findById(id)

        if (post) {
            return post
        }
        return null
    }

    async deletePost(id: string): Promise<void> {
        await Post.deleteOne({ _id: id })
    }
}