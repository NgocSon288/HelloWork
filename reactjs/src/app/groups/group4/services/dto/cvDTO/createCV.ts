
export interface CreateCVInput { 
        name: string,
        bio: string,
        phoneNumber: string,
        email: string,
        facebook: string, 
        github: string, 
        twitter: string,
        experienceDetails: {
            jobName: string,
            companyName: string,
            period: string, // Length of job time
            jobPosition: string, 
            content: string
        },
        educationDetails: 	{
            schoolName:	string
            period:	string
            specialize:	string
        },
        skillDetails: {   
            skillname: string
        },
        achievementDetails: {
            name: string,
            organization: string, 
            period: string,
            content: string,
        },
}