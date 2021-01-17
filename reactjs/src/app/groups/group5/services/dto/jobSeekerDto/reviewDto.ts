export interface CreateReviewInput {
    ratingStar: number,
    numberOfReview: number,
    idJobSeeker: number,
    grantedPermissions: [
        string
    ]
}

export interface UpdateReviewInput extends CreateReviewInput {
    id: number
}

export interface GetAllReviewByIDOutput<IReviewItem> {
    items: IReviewItem[]
}