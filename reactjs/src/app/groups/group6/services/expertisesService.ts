// import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { IExpertiseCreate, IExpertiseGet, IExpertiseGetAll } from '../models/expertises';
// import { GetRecruitmentById } from './dto/recruitmentsDTO/getRecruitmentById';
// import { CreateRecruitments } from './dto/recruitmentsDTO/createRecruitments';

class ExpertisesService {
  public async getById(id: string): Promise<IExpertiseGet> {
    let result = await http.get(`/api/Expertises/Get/${id}`);
    console.log(result.data.result);
    return result.data.result;
  }

  public async getAll(): Promise<IExpertiseGetAll<IExpertiseGet>> {
    let result = await http.get(`/api/Expertises/Get`);
    console.log(result.data.result);
    return result.data.result;
  }

  public async create(data: IExpertiseCreate) {
    let result = await http.post('/api/Expertises/Create', data);
    console.log(result);
    return result.data.result;
  }

  public async delete(id: string) {
    let result = await http.delete(`/api/Expertises/Delete/${id}`);
    console.log(result);
    return result.data.result;
  }

 
}

export default new ExpertisesService();