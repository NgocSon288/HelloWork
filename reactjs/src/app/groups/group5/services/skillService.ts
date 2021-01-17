import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateSkillInput,
        UpdateSkillInput,
        GetAllSkillByIDOutput} from './dto/jobSeekerDto/skillDto';
import {ISkillItem} from '../stores/skillStore'

class SkillService {

  public async create(createSkillInput: CreateSkillInput) {
    let result = await http.post('/api/Skill/Create', createSkillInput);
    return result.data.result;
  }

  public async update(updateSkillInput: UpdateSkillInput) {
    let result = await http.put('/api/Skill/Update', updateSkillInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/Skill/Delete/' + entityDto.id);
    return result.data;
  }

  public async getSkillByIDjobSeeker(entityDto: EntityDto) : Promise<GetAllSkillByIDOutput<ISkillItem>>{
    let result = await http.get('/api/Skill/Get/' + entityDto.id);
    return result.data.result;
  }
}

export default new SkillService();