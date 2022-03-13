import { User } from '../../domain/models/User'
import { IUserRepository } from '../../application/repositories/IUserRepository'
import { PrismaClient } from '@prisma/client'

export class UserRepository extends IUserRepository {
    private prisma: PrismaClient

    constructor() {
        super()
        this.prisma = new PrismaClient({
            rejectOnNotFound: true,
        })
    }

    async find(userName: string): Promise<User> {
        const result = await this.prisma.user.findUnique({
            where: {
                userName
            },
            select: {
                id: true,
                userName: true,
                password: true,
                createdAt: true,
                updatedAt: true,
            }
        })
        return new User(
            result.id,
            result.userName,
            result.password,
            result.createdAt,
            result.updatedAt
        )
    }

    async create(user: User): Promise<User> {
        const result = await this.prisma.user.create({
            data: {
                userName: user.userName,
                password: user.password,
            }
        })
        user.id = result.id
        user.password = undefined
        return user
    }

    async update(user: User): Promise<User> {
        const result = await this.prisma.user.update({
            where: {
                userName: user.userName
            },
            data: {
                password: user.password
            }
        })
        user.password = undefined
        return user
    }

    async delete(user: User): Promise<User> {
        const result = await this.prisma.user.delete({
            where: {
                userName: user.userName
            }
        })
        return user
    }
}