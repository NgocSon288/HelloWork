import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateStateApplicationInput, UpdateStateApplicationInput, GetStateApplicationByJSInput } from '../services/dto/stateApplicationDto/stateApplicationDto';

import stateApplicationService from '../services/stateApplicationService'

export interface IStateApplicationItem {
    IDJobSeeker: number,
    IDRecuitment: number,
    State: string,

    isStatic: boolean,
    isDefault: boolean,
    creationTime: string,
    id: number
}

class StateApplicationStore {

    @observable stateApplication!: IStateApplicationItem;

    @action
    async createStateApplication(createStateApplicationInput: CreateStateApplicationInput) {
        await stateApplicationService.create(createStateApplicationInput);
    }

    @action
    async getStateApplicationByID(dto: EntityDto) {
        let result = await stateApplicationService.getStateApplicationByID(dto);
        this.stateApplication = result;
    }
    @action
    async update(updateUserInput: UpdateStateApplicationInput) {
        let result = await stateApplicationService.update(updateUserInput);
        this.stateApplication = result;
    }

    @action
    async deleteStateApplication(entityDto: EntityDto) {
        await stateApplicationService.delete(entityDto);
    }
    @action
    async getStateApplicationByJobSeekerRecuitment(getInput: GetStateApplicationByJSInput) {
        let result = await stateApplicationService.getStateApplicationByJobSeekerRecuitment(getInput);
        this.stateApplication = result;
    }
}

export default StateApplicationStore;
