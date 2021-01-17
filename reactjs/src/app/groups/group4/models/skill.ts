export interface ISkill { 
    // id: number
    skillName: string
}

export interface ISkillCreate { 
    skillName: string
}

export interface ISkillGet { 
    id: number,
    skillName: string
}

export interface ISkillGetAll<ISkillGet> {
    items: ISkillGet[]
}