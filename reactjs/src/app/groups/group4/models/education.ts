export interface IEducation { 
    //id: number
    schoolName: string, 
    period: string,
    specialize: string
}

export interface IEducationCreate { 
    schoolName: string, 
    period: string,
    specialize: string
}

export interface IEducationGet { 
    id: number,
    schoolName: string, 
    period: string,
    specialize: string
}

export interface IEducationGetAll<IEducationGet> { 
    items: IEducationGet[]
}