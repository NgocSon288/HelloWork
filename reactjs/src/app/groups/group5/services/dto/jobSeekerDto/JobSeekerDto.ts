export interface CreateJobSeekerInput {
    name: string,
    birthday: string,
    description: string,
    workLocation: string,
    address: string,
    email: string,
    phoneNumber: string,
    expertise: string,
    facebook: string,
    github: string,
    twitter: string,
    image: string,
    field: string,
    sex : string,
}

export interface UpdateJobSeekerInput extends CreateJobSeekerInput {
    id: number
}