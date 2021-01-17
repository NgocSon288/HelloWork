import { IExpertise, IExpertiseGet} from './expertises'
export interface IRecruitments {
  name: string,
  finishDate: string,
  wayOfWork: string,
  salaryRange: string,
  expertises: IExpertise[],
  urgentLevel: string,
  description: string,
  requirement: string,
  contactEmail: string,
  state: string
}

export interface IRecruitmentsGet {
  id: string,
  name: string,
  finishDate: string,
  wayOfWork: string,
  salaryRange: string,
  expertises: IExpertiseGet[],
  urgentLevel: string,
  description: string,
  requirement: string,
  contactEmail: string,
  state: string,
  creationTime: string,
  creatorUserId: number
}
export interface IRecruitmentsUpdate {
  id: string,
  name: string,
  finishDate: string,
  wayOfWork: string,
  salaryRange: string,
  expertises: IExpertiseGet[],
  urgentLevel: string,
  description: string,
  requirement: string,
  contactEmail: string,
  state: string
}