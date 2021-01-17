import { action, observable } from 'mobx';
import RecruitmentsService from '../services/recruitmentsService'
import { IRecruitments, IRecruitmentsGet, IRecruitmentsUpdate } from '../models/recruitments';

class RecruitmentsStore {

    @observable recruitment!: IRecruitmentsGet;

    @action
    async getRecruitmentById(id: string) {
        let result = await RecruitmentsService.getById(id);
        this.recruitment = result;
    }

    @action
    async createRecruitment(createJobTypeInput: IRecruitments) {
        let result = await RecruitmentsService.create(createJobTypeInput);
        console.log(result);
    }

    @action
    async updateRecruitment(dataUpdate: IRecruitmentsUpdate) {
        let result = await RecruitmentsService.update(dataUpdate);
        console.log(result);
    }

}

export default RecruitmentsStore;
