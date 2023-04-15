export interface IUser {
    token: string
    client: IClient
}

export interface IClient {
    username: string
    password: string
}