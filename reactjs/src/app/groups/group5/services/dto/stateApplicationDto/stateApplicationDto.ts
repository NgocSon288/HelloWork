export interface CreateStateApplicationInput {
    IDJobSeeker: number,
    IDRecuitment: number,
    State: string,
    grantedPermissions: [
        string
    ]
}

export interface UpdateStateApplicationInput extends CreateStateApplicationInput {
    id: number
}

export interface GetStateApplicationByJSInput {
    IDJobSeeker: number,
    IDRecuitment: number,
    grantedPermissions: [
        string
    ]
}