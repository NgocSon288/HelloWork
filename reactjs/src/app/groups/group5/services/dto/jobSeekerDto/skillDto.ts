export interface CreateSkillInput {
    skillName: string,
    idJobSeeker: number,
    grantedPermissions: [
        string
    ]
}

export interface UpdateSkillInput extends CreateSkillInput {
    id: number
}

export interface GetAllSkillByIDOutput<ISkillItem> {
    items: ISkillItem[]
}