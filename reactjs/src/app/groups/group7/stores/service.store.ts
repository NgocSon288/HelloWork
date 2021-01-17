import { action, observable } from 'mobx';
import { CreateRegisterService } from '../services/dto/serviceDTO/clientService.service';
import { CreateRegisterServiceFromServer, ItemService, ListService } from '../services/dto/serviceDTO/serverService.service';
import serviceService from '../services/service.Service'

class ServiceStore {

    @observable services!: ListService<ItemService>;
    @observable service!: CreateRegisterServiceFromServer;
    @observable resultDeny!: any;
    @observable resultExtend!: any;
    @observable resultCancelExtend:any;

    @action
    async getAll(id:number) {
        this.services = await serviceService.GetRegisterServiceByUserId(id);
    }

    @action
    async register(data: CreateRegisterService) {
        this.service=await serviceService.register(data);
    }
    @action
    async deny(id:number) {
        this.resultDeny=await serviceService.deny(id);
    }
    @action
    async extend(id:number,bodyMail:{email:string,username:string,servicename:string}) {
        this.resultExtend=await serviceService.extend(id,bodyMail);
    }
    
    @action
    async cancelExtend(id:number) {
        this.resultCancelExtend=await serviceService.cancelExtend(id);
    }


}

export default ServiceStore;
