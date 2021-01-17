export interface GetById {
    id: number;
    Reason: string,
    Description: string,
    StarNumber: number,
    LastmModificationTime: Date,
}

export interface GetByIdRecruiter extends GetById {
    RecruiterName: string,
    RecruiterCompanyName: string
}

export interface GetByIdJobSeeker extends GetById {
    JobSeekerName: string
}
