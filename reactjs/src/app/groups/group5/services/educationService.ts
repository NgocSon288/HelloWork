import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateEducationInput,
        UpdateEducationInput,
        GetAllEducationByIDOutput} from './dto/jobSeekerDto/educationDto';
import {IEducationItem} from '../stores/educationStore'

class EducationService {

  public async create(createEducationInput: CreateEducationInput) {
    let result = await http.post('/api/Education/Create', createEducationInput);
    return result.data.result;
  }

  public async update(updateEducationInput: UpdateEducationInput) {
    let result = await http.put('/api/Education/Update', updateEducationInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/Education/Delete/' + entityDto.id);
    return result.data;
  }

  public async getEducationByIDjobSeeker(entityDto: EntityDto) : Promise<GetAllEducationByIDOutput<IEducationItem>>{
    let result = await http.get('/api/Education/Get/' + entityDto.id);
    return result.data.result;
  }
}

export default new EducationService();