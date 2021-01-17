export interface CreateAchievementInput {
    achievementName: string,
    idJobSeeker: number,
    year: number,
    organization: string,
    note: string,
    grantedPermissions: [
        string
    ]
}

export interface UpdateAchievementInput extends CreateAchievementInput {
    id: number
}

export interface GetAllAchievementByIDOutput<IAchievementItem> {
    items: IAchievementItem[]
}