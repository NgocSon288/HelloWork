import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateSkillInput, GetAllSkillByIDOutput, UpdateSkillInput } from '../services/dto/jobSeekerDto/skillDto';

import skillService from '../services/skillService'

export interface ISkillItem {
    skillName: string,
    idJobSeeker: number,

    isStatic: boolean,
    isDefault: boolean,
    creationTime: any,
    id: number
}

class SkillStore {

    @observable skills!: GetAllSkillByIDOutput<ISkillItem>;
    @observable skill!: ISkillItem;

    @action
    async getAllSkillByID(entityDto: EntityDto) {
        let result = await skillService.getSkillByIDjobSeeker(entityDto);
        this.skills = result;
    }

    @action
    async createSkill(createSkillInput: CreateSkillInput) {
        let result = await skillService.create(createSkillInput);
        this.skills.items.push(result);
    }

    @action
    async update(updateUserInput: UpdateSkillInput) {
        let result = await skillService.update(updateUserInput);
        this.skill = result;
        let temp : EntityDto = new EntityDto();
        temp.id = this.skill.idJobSeeker;
        this.skills = await skillService.getSkillByIDjobSeeker(temp);
    }

    @action
    async deleteSkill(entityDto: EntityDto) {
        await skillService.delete(entityDto);
        this.skills.items = this.skills.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

}

export default SkillStore;
