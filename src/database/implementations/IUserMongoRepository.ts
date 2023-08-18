import { UserEntitie } from "../../entities/User";
import { createHash } from "../../helpers/utils";
import { IUserRepository } from "../../repositories/IUserRepository";
import User from "../schemas/User";

export class UserMongoRepository implements IUserRepository {
    async find(query: any): Promise<Object> {
        const filter = {}

        const pageOptions = {
            page: parseInt(query.page as string) || 0,
            limit: parseInt(query.limit as string) || 10,
        }

        if (query.username) Object.assign(filter, { name: { $regex: query.username, $options: 'i' } })

        const totalEntries = await User.find(filter).count()
        const userData = await User
            .find(filter)
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)

        const data = {
            data: userData,
            metadata: {
                pageNumber: pageOptions.page,
                pageSize: userData.length,
                totalEntries: totalEntries,
                totalPages: Math.ceil(totalEntries / pageOptions.limit),
            },
        }

        return data

    }

    async findAll(query: any): Promise<any> {
        const filter = {}

        const pageOptions = {
            page: parseInt(query.page as string) || 0,
            limit: parseInt(query.limit as string) || 10,
        }

        if (query.username) Object.assign(filter, { username: { $regex: query.username, $options: 'i' } })

        const userData = await User
            .find(filter)
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)

        if (userData.length <= 0) return []
        return userData

    }



    async findById(id: string): Promise<UserEntitie | null> {
        return await User.findById({ _id: id })
    }

    async editUser(id: string, data: UserEntitie): Promise<void> {
        await User.updateOne({ _id: id }, { $set: data })
    }

    async deleteUser(id: string): Promise<void> {
        await User.deleteOne({ _id: id })
    }

    async save(data: UserEntitie): Promise<void> {
        const pass = await createHash(data.password)
        const newData = new User({ ...data, password: pass })
        await newData.save()
    }
}