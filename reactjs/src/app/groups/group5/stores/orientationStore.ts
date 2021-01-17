import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateOrientationInput, GetAllOrientationByIDOutput, UpdateOrientationInput } from '../services/dto/jobSeekerDto/orientationDto';

import orientationService from '../services/orientationService'

export interface IOrientationItem {
    orientationName: string,
    idJobSeeker: number,

    isStatic: boolean,
    isDefault: boolean,
    creationTime: any,
    id: number
}

class OrientationStore {

    @observable orientations!: GetAllOrientationByIDOutput<IOrientationItem>;
    @observable orientation!: IOrientationItem;

    @action
    async getAllOrientationByID(entityDto: EntityDto) {
        let result = await orientationService.getOrientationByIDjobSeeker(entityDto);
        this.orientations = result;
    }

    @action
    async createOrientation(createOrientationInput: CreateOrientationInput) {
        let result = await orientationService.create(createOrientationInput);
        this.orientations.items.push(result);
    }

    @action
    async update(updateUserInput: UpdateOrientationInput) {
        let result = await orientationService.update(updateUserInput);
        this.orientation = result;
        let temp : EntityDto = new EntityDto();
        temp.id = this.orientation.idJobSeeker;
        this.orientations = await orientationService.getOrientationByIDjobSeeker(temp);
    }

    @action
    async deleteOrientation(entityDto: EntityDto) {
        await orientationService.delete(entityDto);
        this.orientations.items = this.orientations.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

}

export default OrientationStore;
