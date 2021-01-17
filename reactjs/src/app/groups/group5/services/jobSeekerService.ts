import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateJobSeekerInput, UpdateJobSeekerInput} from './dto/jobSeekerDto/JobSeekerDto';

class JobSeekerService {

  public async create(createJobSeekerInput: CreateJobSeekerInput) {
    let result = await http.post('/api/JobSeekers/Create', createJobSeekerInput);
    return result.data.result;
  }

  public async update(updateJobSeekerInput: UpdateJobSeekerInput) {
    let result = await http.put('/api/JobSeekers/Update', updateJobSeekerInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/JobSeekers/Delete/' + entityDto.id);
    return result.data;
  }

  public async getJobSeekerByID(entityDto: EntityDto) {
    let result = await http.get('/api/JobSeekers/Get/' + entityDto.id);
    return result.data.result;
  }
}

export default new JobSeekerService();