export interface IAchievement { 
    // id: number
    name: string,
    organization: string, 
    period: string, 
    content: string
}

export interface IAchievementCreate {
    name: string,
    organization: string, 
    period: string, 
    content: string
}

export interface IAchievementGet {
    id: number,
    name: string,
    organization: string, 
    period: string, 
    content: string
}

export interface IAchievementGetAll<IAchievementGet> { 
    items: IAchievementGet[]
}

