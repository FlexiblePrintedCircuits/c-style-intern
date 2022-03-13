import { User } from '../../domain/models/User'

export abstract class IUserRepository {
    abstract find(userName: string): Promise<User>
    abstract create(user: User): Promise<User>
    abstract update(user: User): Promise<User>
    abstract delete(user: User): Promise<User>
}