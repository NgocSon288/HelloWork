import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateStateApplicationInput, UpdateStateApplicationInput, GetStateApplicationByJSInput} from './dto/stateApplicationDto/stateApplicationDto';

class StateApplicationService {

  public async create(createStateApplicationInput: CreateStateApplicationInput) {
    let result = await http.post('/api/StateApplications/Create', createStateApplicationInput);
    return result.data.result;
  }

  public async update(updateStateApplicationInput: UpdateStateApplicationInput) {
    let result = await http.put('/api/StateApplications/Update', updateStateApplicationInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/StateApplications/Delete/' + entityDto.id);
    return result.data;
  }

  public async getStateApplicationByID(entityDto: EntityDto) {
    let result = await http.get('/api/StateApplications/Get/' + entityDto.id);
    return result.data.result;
  }

  public async getStateApplicationByJobSeekerRecuitment(getStateApplicationByJSInput: GetStateApplicationByJSInput) {
    let result = await http.put('/api/StateApplications/Update', getStateApplicationByJSInput);
    return result.data.result;
  }
}

export default new StateApplicationService();