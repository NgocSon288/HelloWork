export interface CreateRecruitments {
  name: string,
  position: string,
  finishDate: string,
  wayOfWork: string,
  salaryRange: string,
  expertises: [
    {
      name: string
    }
  ],
  urgentLevel: string,
  description: string,
  requirement: string,
  contactEmail: string,
  state: string
}
