export interface User {
        id?: string
        name: string
        user_name: string
        password: string
        type: number
        particular: boolean
}

export interface UserLogin{
        user: User
        token: string
}

export const TypeUserAdmin = 1
