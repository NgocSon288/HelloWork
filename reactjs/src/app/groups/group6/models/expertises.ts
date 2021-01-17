export interface IExpertise {
  id: number
}

export interface IExpertiseGet {
  name: string,
  id: number
}

export interface IExpertiseCreate {
  name: string
}


export interface IExpertiseGetAll<IExpertiseGet> {
  items: IExpertiseGet[]
}