

export interface CreateRecruitmentPostInput {
    id: number,
    name : string,
    position : string,
    description : string,
    requirement : string,
    contactEmail : string,
    wayOfWork : string,
    salaryRange : string,
    state : string,
    urgentLevel : string,
    grantedPermissions: [
        string
    ]
}

export interface UpdateRecruitmentPostInput extends CreateRecruitmentPostInput {
    id: number
}