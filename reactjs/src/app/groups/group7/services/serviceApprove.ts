import http from 'shared/services/httpService';
//import { ItemService } from './dto/serviceDTO/serverService.service'
class servicesApprove {
    services = [];
    public async getAll() {
        let result = await http.get('/api/RegisterService/GetAll');
        return result.data.result;
    }
    public async duyet(data: number) {
        let result = await http.put(`/api/RegisterService/ApproveRegisterService?registerServiceId=${data}`);
        return result.data.result;
    }
}
export default new servicesApprove();