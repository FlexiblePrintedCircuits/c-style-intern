export class User {
    private _id: string
    private _userName: string
    private _password: string
    private _createdAt: Date
    private _updatedAt: Date

    get id(): string {
        return this._id 
    }

    set id(id: string) {
        this._id = id
    }

    get userName(): string {
        return this._userName
    }

    set userName(userName: string) {
        this._userName = userName
    }

    get password(): string {
        return this._password
    }

    set password(password: string) {
        this._password = password
    }

    get createdAt(): Date {
        return this._createdAt
    }

    set createdAt(createdAt: Date) {
        this._createdAt = createdAt
    }

    get updatedAt(): Date {
        return this._updatedAt
    }

    set updatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt
    }

    constructor (
        id: string = undefined,
        userName: string = undefined,
        password: string = undefined,
        createdAt: Date = undefined,
        updatedAt: Date = undefined,
    ) {
        this._id = id
        this._userName = userName
        this._password = password
        this._createdAt = createdAt
        this._updatedAt = updatedAt
    }
}