
export interface CreateOrUpdateCommentInput {
    IDRecruiter: number,
    IDJobSeeker: number,
    StarNumber: number,
    Reason: string,
    Description: string,
    IsRecruiterWrite: boolean,
}

// export interface UpdateCommentInput extends CreateOrUpdateCommentInput {
//     id: number
// }