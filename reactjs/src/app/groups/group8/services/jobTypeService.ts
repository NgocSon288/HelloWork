import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
import http from 'shared/services/httpService';
import { CreateJobTypeInput } from './dto/jobTypeDTO/createOrUpdateJobTypeInput';
import { GetAllJobTypeOutput } from './dto/jobTypeDTO/getAllJobTypeOutput';
import { UpdateJobTypeInput } from './dto/jobTypeDTO/UpdateJobTypeInput';
import {IJobTypeItem} from '../stores/jobTypeStore'
class JobTypeService {
  public async getAll(): Promise<GetAllJobTypeOutput<IJobTypeItem>> {
    let result = await http.get('/api/services/app/JobType/GetJobTypes');
    return result.data.result;
  }

  public async create(createJobTypeInput: CreateJobTypeInput) {
    let result = await http.post('/api/services/app/JobType/CreateJobType', createJobTypeInput);
    return result.data.result;
  }

  public async update(updateJobTypeInput: UpdateJobTypeInput) {
    let result = await http.put('/api/services/app/JobType/UpdateJobType', updateJobTypeInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/services/app/JobType/DeleteJobType', { params: entityDto });
    return result.data;
  }

  public async getJobTypeByID(entityDto: EntityDto) {
    let result = await http.get('/api/JobTypes/Get/' + entityDto.id);
    return result.data;
  }

 
}

export default new JobTypeService();