import { action, observable } from 'mobx';
import { ICv, ICvGet } from '../models/cv';


import CVService from '../services/CVService'

class CVStore {

    @observable cvList!: ICvGet;

    @action
    async getRecruitmentById(id: string) {
        let result = await CVService.getById(id);
        this.cvList = result;
    }

    @action
    async createCV(createJobTypeInput: ICv) {
        let result = await CVService.createCV(createJobTypeInput);
        console.log("Hoan thanh save")
        console.log(result)
        //this.cvList.items.push(result);
    }
}

export default CVStore