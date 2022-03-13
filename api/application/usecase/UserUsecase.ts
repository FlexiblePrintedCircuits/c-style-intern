import { User } from '../../domain/models/User'
import { IUserRepository } from '../repositories/IUserRepository'

export class UserUsecase {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    createNewUser(userName: string, password: string) {
        const user = new User(
            userName = userName,
            password = password,
        )
        return this.userRepository.create(user)
    }

    findUserByUserName(userName: string) {
        return this.userRepository.find(userName)
    }

    updatePassword(password: string) {
        const user = new User(password = password)
        return this.userRepository.update(user)
    }

    deleteUser(userName: string) {
        const user = new User(userName = userName)
        return this.userRepository.delete(user)
    }
}