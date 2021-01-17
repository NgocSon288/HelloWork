// import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { IRecruitments, IRecruitmentsGet, IRecruitmentsUpdate } from '../models/recruitments';
import { message } from 'antd';
// import { GetRecruitmentById } from './dto/recruitmentsDTO/getRecruitmentById';
// import { CreateRecruitments } from './dto/recruitmentsDTO/createRecruitments';

class RecruitmentsService {
  public async getById(id: string): Promise<IRecruitmentsGet> {
    let result = await http.get(`/api/Recruitments/Get/${id}`);
    return result.data.result;
  }

  public async create(createRecruitmentInput: IRecruitments) {
    let result = await http.post('/api/Recruitments/Create', createRecruitmentInput);
    if (result.data.success) {
      message.config({
        top: 10,
      })
      message.success('Thêm tin tuyển dụng thành công');
    }
    return result.data.result;
  }

  public async update(dataUpdate: IRecruitmentsUpdate) {
    let result = await http.put('/api/Recruitments/Update', dataUpdate);
    if (result.data.success) {
      message.config({
        top: 50,
      })
      message.success('Cập nhật tin tuyển dụng thành công');
    }
    return result.data.result;
  }
}

export default new RecruitmentsService();