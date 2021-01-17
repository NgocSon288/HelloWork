import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateAchievementInput,
        UpdateAchievementInput,
        GetAllAchievementByIDOutput} from './dto/jobSeekerDto/achievementDto';
import {IAchievementItem} from '../stores/achievementStore'

class AchievementService {

  public async create(createAchievementInput: CreateAchievementInput) {
    let result = await http.post('/api/Achievement/Create', createAchievementInput);
    return result.data.result;
  }

  public async update(updateAchievementInput: UpdateAchievementInput) {
    let result = await http.put('/api/Achievement/Update', updateAchievementInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/Achievement/Delete/' + entityDto.id);
    return result.data;
  }

  public async getAchievementByIDjobSeeker(entityDto: EntityDto) : Promise<GetAllAchievementByIDOutput<IAchievementItem>>{
    let result = await http.get('/api/Achievement/Get/' + entityDto.id);
    return result.data.result;
  }
}

export default new AchievementService();