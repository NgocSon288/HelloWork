import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateOrientationInput,
        UpdateOrientationInput,
        GetAllOrientationByIDOutput} from './dto/jobSeekerDto/orientationDto';
import {IOrientationItem} from '../stores/orientationStore'

class OrientationService {

  public async create(createOrientationInput: CreateOrientationInput) {
    let result = await http.post('/api/Orientation/Create', createOrientationInput);
    return result.data.result;
  }

  public async update(updateOrientationInput: UpdateOrientationInput) {
    let result = await http.put('/api/Orientation/Update', updateOrientationInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/Orientation/Delete/' + entityDto.id);
    return result.data;
  }

  public async getOrientationByIDjobSeeker(entityDto: EntityDto) : Promise<GetAllOrientationByIDOutput<IOrientationItem>>{
    let result = await http.get('/api/Orientation/Get/' + entityDto.id);
    return result.data.result;
  }
}

export default new OrientationService();