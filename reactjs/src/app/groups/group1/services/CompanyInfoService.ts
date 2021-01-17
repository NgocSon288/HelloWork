import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
import http from 'shared/services/httpService';


//import { UpdateCompanyInfoInput } from './dto/CompanyInfoDTO/UpdateCompanyInfoInput';

// import { GetCompanyInfoByIdOutput } from './dto/CompanyInfoDTO/getCompanyInfoByIdOutPut';

class CompanyInfoService {
 

  public async create(entityDto: EntityDto) {
    let result = await http.post('/api/services/app/CompanyInfo/CreateCompanyInfo', entityDto);
    return result.data.result;
  }

  public async update(entityDto: EntityDto) {
    let result = await http.put('/api/Company/Update', entityDto);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/services/app/CompanyInfo/DeleteCompanyInfo', { params: entityDto });
    return result.data;
  }

  public async getCompanyInfoByID(entityDto: EntityDto) {
    let result = await http.get('/api/Company/Get/' +  entityDto.id);
    return result.data.result;
  } 
  public async getRecruiterInfoByID(entityDto: EntityDto) {
    let result = await http.get('/api/Recruiter/Get/' +  entityDto.id);
    return result.data.result;
  } 

 
}

export default new CompanyInfoService();