
export interface CreateJobTypeInput {
    name: string,
    displayName: string,
    normalizedName: string,
    description: string,
    grantedPermissions: [
        string
    ]
}

export interface UpdateJobTypeInput extends CreateJobTypeInput {
    id: number
}