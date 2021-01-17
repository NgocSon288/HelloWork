import http from 'shared/services/httpService';

import { ItemServiceRegister, ListServiceRegister } from './dto/serviceDTO/serverService.service';

class ServiceRegisterService {

    listServiceRegister:ListServiceRegister<ItemServiceRegister>={
        items:[
            {
                name: 'Quảng cáo doanh nghiệp (gói trang chủ)',
                description: 'Doanh nghiệp của bạn sẽ được hiện lên ở trang chủ, ai thích thì bấm vào không thích thì thôi nhưng ít nhất họ đã xem và biết về công ty của bạn.',
                unit:'ngày',
                services: [
                    {
                        id: 1,
                        serviceTypeId: 1,
                        useTimes: 30,
                        price: 5000000,
                        creatorUserId: 1,
                        creationTime: new Date(),
                        lastModifierUserId: "any",
                        lastModificationTime: "any",
                        deleterUserId: "any",
                        deletionTime: "any",
                        isDeleted: false
                    },                {
                        id: 2,
                        serviceTypeId: 1,
                        useTimes: 60,
                        price: 10000000,
                        creatorUserId: 1,
                        creationTime: new Date(),
                        lastModifierUserId: "any",
                        lastModificationTime: "any",
                        deleterUserId: "any",
                        deletionTime: "any",
                        isDeleted: false
                    },
                    {
                        id: 3,
                        serviceTypeId: 1,
                        useTimes: 90,
                        price: 15000000,
                        creatorUserId: 1,
                        creationTime: new Date(),
                        lastModifierUserId: "any",
                        lastModificationTime: "any",
                        deleterUserId: "any",
                        deletionTime: "any",
                        isDeleted: false
                    },
                ]
            }
        ]
    }

    public async getAll(): Promise<ListServiceRegister<ItemServiceRegister>> {
        let result = await http.get('/api/ServiceType/GetFullService');
        console.log('from serviceRegister sevice:',result.data.result);
        return result.data.result;
        // return new Promise(resolve=>{
        //     resolve(this.listServiceRegister);
        // })
    }
}

export default new ServiceRegisterService();
