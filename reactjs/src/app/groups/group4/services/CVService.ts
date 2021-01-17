//import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { ICv, ICvGet } from '../models/cv';


class CVService { 

    public async getById(id: string): Promise<ICvGet> {
      let result = await http.get(`/api/CVEmployeeInformations/Get/${id}`);
      console.log(result.data.result);
      return result.data.result;

      // HELLO MY FRIENDs
    }
    

    public async createCV(createCVInput: ICv) {
        let result = await http.post('/api/CVEmployeeInformations/Create', createCVInput);
        return result.data.result;
      }
}

export default new CVService