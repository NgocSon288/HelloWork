export interface CreateEducationInput {
    name: string,
    school: string,
    startYear:Date,
    endYear: Date,
    majors: string,
    idJobSeeker: number,
}

export interface UpdateEducationInput extends CreateEducationInput {
    id: number
}

export interface GetAllEducationByIDOutput<IEducationItem> {
    items: IEducationItem[]
}