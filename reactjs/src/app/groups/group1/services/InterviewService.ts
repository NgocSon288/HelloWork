import { EntityDto } from 'shared/services/dto/entityDto';
import {GetInterview,IinterviewCreate} from '../stores/InterviewStore'
import http from 'shared/services/httpService';

class InterviewService {
 

  public async createInterview(Iinterview: IinterviewCreate) {
    let result = await http.post('/api/Interviews/Create', Iinterview);
    return result.data.result;
  }
 

  public async updateInterview(entityDto: EntityDto) {
    let result = await http.put('​/api​/Interviews/Update', entityDto);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('/api/Interviews/Delete/'+ entityDto.id);
    return result.data.result;
  }

  public async getInterviewByIDJS(entityDto: GetInterview) {
    let result = await http.put('/api/Interviews/GetByJS', entityDto);
    return result.data.result;
  } 
  public async getInterviewByID(entityDto: EntityDto) {
    let result = await http.get('/api/Interviews/Get/' +  entityDto.id);
    return result.data.result;
  } 

 
}

export default new InterviewService();