import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
import CompanyInfoService from '../services/CompanyInfoService';

export interface ICompanyInfoItem {
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
    website: string;
    expertise: string;
    headcountLimit: number;
    id: number;
}

export interface ICompanyRecruiter {
  idUser: number,
  idCurrentPosition: number,
  name: string,
  email: string,
  phoneNumber: number,
  address: string,
  noIDCard: number,
  image: string,
  idCompany: number,
  id: number
}

class CompanyInfoStore {
    @observable CompanyInfo!: ICompanyInfoItem;
    @observable CompanyRecruiter!: ICompanyRecruiter;
    

    @action
        async getCompanyInfoByID(dto: EntityDto) {
        let result = await CompanyInfoService.getCompanyInfoByID(dto);
        
        this.CompanyInfo = {
            name: result.name,
            address: result.address,
            email: result.email,
            phoneNumber: result.phoneNumber,
            website: result.website,
            expertise: result.expertise,
            headcountLimit: result.headcountLimit,
            id: result.id
        };
    }
    @action
        async getRecruiterInfoByID(dto: EntityDto) {
        let result = await CompanyInfoService.getRecruiterInfoByID(dto);
        
        this.CompanyRecruiter = {
          idUser: result.idUser,
          idCurrentPosition: result.idCurrentPosition,
          name: result.name,
          email: result.email,
          phoneNumber: result.phoneNumber,
          address: result.address,
          noIDCard: result.noIDCard,
          image: result.image,
          idCompany: result.idCompany,
          id: result.id
        };
    }

    @action
  async update(dto: EntityDto) {
    let result = await CompanyInfoService.update(dto);

    
    this.CompanyInfo = {
      name: result.name,
      address: result.address,
      email: result.email,
      phoneNumber: result.phoneNumber,
      website: result.website,
      expertise: result.expertise,
      headcountLimit: result.headcountLimit,
      id: result.id
  };
  
    


    
  }
    
    // @action
    // async createCompanyInfo(createCompanyInfoInput: CreateCompanyInfoInput) {
    //     let result = await CompanyInfoService.create(createCompanyInfoInput);
    //     this.CompanyInfo.items.push(result);
    // }
    
    // @action
    // async update(updateUserInput: UpdateCompanyInfoInput) {
    //     // let result = await userService.update(updateUserInput);
    //     // this.users.items = this.users.items.map((x: GetUserOutput) => {
    //     //     if (x.id === updateUserInput.id) x = result;
    //     //     return x;
    //     // });
    // }

    // @action
    // async deleteCompanyInfo(entityDto: EntityDto) {
    //     await CompanyInfoService.delete(entityDto);
    //     this.CompanyInfos.items = this.CompanyInfos.items.filter((x: EntityDto) => x.id !== entityDto.id);
    // }

}

export default CompanyInfoStore;
