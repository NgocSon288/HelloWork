import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateAchievementInput, GetAllAchievementByIDOutput, UpdateAchievementInput } from '../services/dto/jobSeekerDto/achievementDto';

import achievementService from '../services/achievementService'

export interface IAchievementItem {
    achievementName: string,
    idJobSeeker: number,
    year: number,
    organization: string,
    note: string,

    isStatic: boolean,
    isDefault: boolean,
    creationTime: any,
    id: number
}

class AchievementStore {

    @observable achievements!: GetAllAchievementByIDOutput<IAchievementItem>;
    @observable achievement!: IAchievementItem;

    @action
    async getAllAchievementByID(entityDto: EntityDto) {
        let result = await achievementService.getAchievementByIDjobSeeker(entityDto);
        this.achievements = result;
    }

    @action
    async createAchievement(createAchievementInput: CreateAchievementInput) {
        let result = await achievementService.create(createAchievementInput);
        this.achievements.items.push(result);
    }

    @action
    async update(updateUserInput: UpdateAchievementInput) {
        let result = await achievementService.update(updateUserInput);
        this.achievement = result;
        let temp : EntityDto = new EntityDto();
        temp.id = this.achievement.idJobSeeker;
        this.achievements = await achievementService.getAchievementByIDjobSeeker(temp);
    }

    @action
    async deleteAchievement(entityDto: EntityDto) {
        await achievementService.delete(entityDto);
        this.achievements.items = this.achievements.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

}

export default AchievementStore;
