import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateExperienceInput,
        UpdateExperienceInput,
        GetAllExperienceByIDOutput} from './dto/jobSeekerDto/experienceDto';
import {IExperienceItem} from '../stores/experienceStore'

class ExperienceService {

  public async create(createExperienceInput: CreateExperienceInput) {
    let result = await http.post('/api/Experience/Create', createExperienceInput);
    return result.data.result;
  }

  public async update(updateExperienceInput: UpdateExperienceInput) {
    let result = await http.put('/api/Experience/Update', updateExperienceInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/Experience/Delete/' + entityDto.id);
    return result.data;
  }

  public async getExperienceByIDjobSeeker(entityDto: EntityDto) : Promise<GetAllExperienceByIDOutput<IExperienceItem>>{
    let result = await http.get('/api/Experience/Get/' + entityDto.id);
    return result.data.result;
  }
}

export default new ExperienceService();