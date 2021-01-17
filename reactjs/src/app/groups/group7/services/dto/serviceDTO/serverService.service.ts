export interface ListService<ItemService> {
    items: ItemService[];
}

export interface ItemService {
     name: string,
      description: string,
      serviceId: number,
      employerId: number,
      employerName: string,
      unit: string,
      registrationDate: string,
      remainUseTimes: number,
      status: string,
      extend:any,
      id: number
}

export interface IServiceUnit {
    serviceTypeId: number,
    useTimes: number,
    price: number,
    creatorUserId: number,
    creationTime: Date,
    lastModifierUserId: any,
    lastModificationTime: any,
    deleterUserId: any,
    deletionTime: any,
    isDeleted: false,
    id: number
}

export interface ListServiceRegister<ItemServiceRegister> {
    items: ItemServiceRegister[];
}

export interface ItemServiceRegister {
    services: IServiceUnit[],
    name: string,
    description: string,
    unit: string
}

export interface CreateRegisterServiceFromServer{
    name: any,
    description: any,
    serviceId: number,
    employerId: number,
    employerName: any,
    unit: any,
    registrationDate: any,
    remainUseTimes: any,
    status: any,
    id: any
}
