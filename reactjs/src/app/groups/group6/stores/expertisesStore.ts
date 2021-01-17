
import { action, observable } from 'mobx';
import expertisesService from '../services/expertisesService';
import { IExpertiseGet, IExpertiseGetAll, IExpertiseCreate } from '../models/expertises';

class ExpertisesStore {

    @observable expertise!: IExpertiseGet;
    @observable expertises!: IExpertiseGetAll<IExpertiseGet>;

    @action
    async getExpertiseById(id: string) {
        let result = await expertisesService.getById(id);
        this.expertise = result;
    }

    @action
    async getExpertiseAll() {
        let result = await expertisesService.getAll();
        this.expertises = result;
    }

    @action
    async createExpertise(data: IExpertiseCreate) {
        let result = await expertisesService.create(data);
        console.log(result);
    }

    @action
    async deleteExpertise(id: string) {
        let result = await expertisesService.delete(id);
        console.log(result);
    }

}

export default ExpertisesStore;
