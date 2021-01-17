export interface CreateExperienceInput {
    company: string,
    startYear: number,
    endYear: number,
    role: string,
    description: string,
    idJobSeeker: number,
    grantedPermissions: [
        string
    ]
}

export interface UpdateExperienceInput extends CreateExperienceInput {
    id: number
}

export interface GetAllExperienceByIDOutput<IExperienceItem> {
    items: IExperienceItem[]
}