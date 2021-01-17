import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateExperienceInput, GetAllExperienceByIDOutput, UpdateExperienceInput } from '../services/dto/jobSeekerDto/experienceDto';

import experienceService from '../services/experienceService'

export interface IExperienceItem {
    company: string,
    startYear: number,
    endYear: number,
    role: string,
    description: string,
    idJobSeeker: number,

    isStatic: boolean,
    isDefault: boolean,
    creationTime: any,
    id: number
}

class ExperienceStore {

    @observable experiences!: GetAllExperienceByIDOutput<IExperienceItem>;
    @observable experience!: IExperienceItem;

    @action
    async getAllExperienceByID(entityDto: EntityDto) {
        let result = await experienceService.getExperienceByIDjobSeeker(entityDto);
        this.experiences = result;
    }

    @action
    async createExperience(createExperienceInput: CreateExperienceInput) {
        let result = await experienceService.create(createExperienceInput);
        this.experiences.items.push(result);
    }

    @action
    async update(updateUserInput: UpdateExperienceInput) {
        let result = await experienceService.update(updateUserInput);
        this.experience = result;
        let temp : EntityDto = new EntityDto();
        temp.id = this.experience.idJobSeeker;
        this.experiences = await experienceService.getExperienceByIDjobSeeker(temp);
    }

    @action
    async deleteExperience(entityDto: EntityDto) {
        await experienceService.delete(entityDto);
        this.experiences.items = this.experiences.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

}

export default ExperienceStore;
