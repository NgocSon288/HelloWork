export interface CreateOrientationInput {
    orientationName: string,
    idJobSeeker: number,
    grantedPermissions: [
        string
    ]
}

export interface UpdateOrientationInput extends CreateOrientationInput {
    id: number
}

export interface GetAllOrientationByIDOutput<IOrientationItem> {
    items: IOrientationItem[]
}