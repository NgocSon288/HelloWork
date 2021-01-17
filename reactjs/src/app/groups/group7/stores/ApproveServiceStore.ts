import { action, observable } from 'mobx';
//import { EntityDto } from 'shared/services/dto/entityDto';
//import {ApproveServiceOutput} from '../services/dto/qldvDTO/approveService' 
import { GetAllServiceApproveOutput } from '../services/dto/qldvDTO/getAllServiceApprove'
import { ApproveServiceOutput } from '../services/dto/qldvDTO/approveService'
import { ServiceApprove } from '../services/dto/qldvDTO/qlsvDTO'
import servicesApprove from '../services/serviceApprove'

class ApproveServiceStore {

    //@observable service!: ApproveServiceOutput<>;
    @observable serviceListApprove!: GetAllServiceApproveOutput<ServiceApprove>;
    @observable serviceApprove!: ApproveServiceOutput<ServiceApprove>
    @action
    async getAllService() {
        let result = await servicesApprove.getAll();
        this.serviceListApprove = result;
    }
    @action
    async approveService(list: ServiceApprove[]) {
        console.log("list", list);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            console.log(element.id);

            let result = await servicesApprove.duyet(element.id);
            this.serviceApprove = result;
        }
    }
}
export default ApproveServiceStore;