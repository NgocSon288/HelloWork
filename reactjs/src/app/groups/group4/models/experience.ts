export interface IExperience { 
    //id: number, 
    jobName: string,
    companyName: string,
    period: string, // Length of job time
    jobPosition: string, 
    content: string
    
}

export interface IExperienceCreate { 
    jobName: string,
    companyName: string,
    period: string, // Length of job time
    jobPosition: string, 
    content: string
}

export interface IExperienceGet { 
    id: number,
    jobName: string,
    companyName: string,
    period: string, // Length of job time
    jobPosition: string, 
    content: string
}

export interface IExperienceGetAll<IExperienceGet> {
    items: IExperienceGet[]
}