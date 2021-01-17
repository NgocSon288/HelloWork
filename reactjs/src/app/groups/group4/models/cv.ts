import { IExperienceGet} from './experience'
import { IEducationGet} from './education'
import { IAchievementGet} from './achievement'
import { ISkillGet} from './skill'


export interface ICv { 
    name: string,
    bio: string,
    phoneNumber: string,
    email: string,
    facebook: string,
    github: string,
    twitter: string,
    experienceDetails: 
        {
            jobName: string,
            companyName: string,
            period: string, // Length of job time
            jobPosition: string, 
            content: string
        }[],
    educationDetails: 
        {
            schoolName: string, 
            period: string,
            specialize: string
        }[],
    
    achievementDetails: 
        {
            name: string,
            organization: string,  
            period: string, 
            content: string
        }[],
    
    skillDetails: 
        {
            skillName: string
        }[],
    
}

export interface ICvGet { 
    id: string,
    name: string,
    bio: string,
    phoneNumber: string,
    email: string,
    facebook: string, 
    github: string, 
    twitter: string,
    experienceDetails: IExperienceGet[],
    educationDetails: IEducationGet[],
    skillDetails: ISkillGet[],
    achievementDetails: IAchievementGet[],
}