import http from 'shared/services/httpService';
//import { ItemService, ListService } from './dto/serviceDTO/serverService.service';
import { CreateRegisterService } from './dto/serviceDTO/clientService.service';

import axios from 'axios';
import { ItemService, ListService } from './dto/serviceDTO/serverService.service';
const qs = require('qs');

class ServiceService {
    // fake data
    listService:ListService<ItemService>={
        items:[
            {
                name: 'Đặt quảng cáo trang chủ',
                description: 'Đặt quảng cáo trang chủ',
                serviceId: 2,
                employerId: 1,
                employerName: 'Admin',
                unit: 'ngày',
                registrationDate: new Date().toString(),
                remainUseTimes: 60,
                status: 'Đang chờ thanh toán',
                extend: false,
                id: 1
            }
        ]
    }
    // end fake data

    customhttp = axios.create({
        baseURL: 'https://chat-bot-viral.herokuapp.com',
        timeout: 30000,
        paramsSerializer: function (params) {
          return qs.stringify(params, {
            encode: false,
          });
        },
      });


    public async GetRegisterServiceByUserId(id:number): Promise<ListService<ItemService>> {
        let result = await http.get(`/api/RegisterService/GetRegisterServiceByUserId?id=${id}`);
        console.log('GetRegisterServiceByUserId:',result.data.result);
        return result.data.result;
        // return new Promise((resolve)=>{
        //     resolve(this.listService);
        // })
    }

    public async register(data: CreateRegisterService) {
        let result = await http.post('/api/RegisterService/Create',data);
        console.log('RegisterServiceCreate:',result.data.result);
        return result.data.result;
    }

    public async deny(id:number) {
        let result = await http.delete(`/api/RegisterService/DeleteRegisterService?id=${id}`);
        console.log('Deny result :',result.data.result);
        return result.data.result;
    }

    public async extend(id:number,bodyMail:{email:string,username:string,servicename:string}) {
        let result = await http.put(`/api/RegisterService/ExtendRegisterService?id=${id}`);
        console.log('Extend result :',result.data.result);
        await this.customhttp.post('/api/send-mail',bodyMail)
        return result.data.result;
    }
    public async cancelExtend(id:number) {
        let result = await http.put(`/api/RegisterService/CancelExtendRegisterService?id=${id}`);
        console.log('cancelExtend result :',result.data.result);
        return result.data.result;
    }
}

export default new ServiceService();
