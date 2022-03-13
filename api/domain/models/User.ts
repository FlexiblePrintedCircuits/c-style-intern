export class User {
    private id: string
    private userName: string
    private password: string
    private createdAt: Date
    private updatedAt: Date

    constructor (
        id: string,
        userName: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        this.id = id
        this.userName = userName
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}