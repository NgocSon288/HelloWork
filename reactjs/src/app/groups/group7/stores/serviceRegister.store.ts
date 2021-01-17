import { action, observable } from 'mobx';
import { ItemServiceRegister, ListServiceRegister } from '../services/dto/serviceDTO/serverService.service';
import serviceRegisterService from '../services/serviceRegister.service'

class ServiceRegisterStore {

    @observable servicesRegister!: ListServiceRegister<ItemServiceRegister>;
    @action
    async getAll() {
        this.servicesRegister = await serviceRegisterService.getAll();
    }
}

export default ServiceRegisterStore;
