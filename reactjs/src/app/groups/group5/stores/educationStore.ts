import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateEducationInput, GetAllEducationByIDOutput, UpdateEducationInput } from '../services/dto/jobSeekerDto/educationDto';

import educationService from '../services/educationService'

export interface IEducationItem {
    name: string,
    school: string,
    startYear:string,
    endYear: string,
    majors: string,
    idJobSeeker: number,
    creationTime: any,
    id: number
}

class EducationStore {

    @observable educations!: GetAllEducationByIDOutput<IEducationItem>;
    @observable education!: IEducationItem;

    @action
    async getAllEducationByID(entityDto: EntityDto) {
        let result = await educationService.getEducationByIDjobSeeker(entityDto);
        this.educations = result;
    }

    @action
    async createEducation(createEducationInput: CreateEducationInput) {
        let result = await educationService.create(createEducationInput);
        this.educations.items.push(result);
    }

    @action
    async update(updateUserInput: UpdateEducationInput) {
        let result = await educationService.update(updateUserInput);
        this.education = result;
        let temp : EntityDto = new EntityDto();
        temp.id = this.education.idJobSeeker;
        this.educations = await educationService.getEducationByIDjobSeeker(temp);
    }

    @action
    async deleteEducation(entityDto: EntityDto) {
        await educationService.delete(entityDto);
        this.educations.items = this.educations.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

}

export default EducationStore;
