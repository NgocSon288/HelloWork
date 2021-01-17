import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
import http from 'shared/services/httpService';
import {getState,IStateApplicant} from '../stores/StateApplicantStore'

class StateApplicantService {
 

  public async createStateApplicant(entityDto: EntityDto) {
    let result = await http.post('​/api/StateApplicants/Create', entityDto);
    return result.data.result;
  }

  public async updateStateApplicant(entityDto: IStateApplicant) {
    let result = await http.put('/api/StateApplicants/Update', entityDto);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('/api/StateApplicants/Delete/'+ entityDto.id);
    return result.data.result;
  }

  public async getStateApplicantByIDJobSeeker(GetState: getState) {
    let result = await http.put('/api/StateApplicants/GetByJS', GetState);
    return result.data.result;
  } 
  public async getStateApplicantByID(entityDto: EntityDto) {
    let result = await http.get('/api/StateApplicants/Get/' +  entityDto.id);
    return result.data.result;
  } 

 
}

export default new StateApplicantService();