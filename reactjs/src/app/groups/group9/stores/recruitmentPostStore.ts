import { action, observable } from 'mobx';
import recruitmentPostService from '../services/recruitmentPostService';
import { getAllRecruitmentPostOutput } from '../services/dto/RecruimentPostDTO/getAllRecruitmentPostOutput';
import { DeleteRcruitment } from '../services/dto/RecruimentPostDTO/DeleteRecruitmentPostInput';
import { DisableRecruitmentPostInput } from '../services/dto/RecruimentPostDTO/DisableRecruitmentPostInput';

// "id": 0,
// "name": "string",
// "position": "string",
// "finishDate": "2020-10-30T11:56:25.973Z",
// "wayOfWork": "string",
// "salaryRange": "string",
// "expertises": [
//   {
//     "name": "string",
//     "creatorUserId": 0,
//     "creationTime": "2020-10-30T11:56:25.973Z",
//     "lastModifierUserId": 0,
//     "lastModificationTime": "2020-10-30T11:56:25.973Z",
//     "deleterUserId": 0,
//     "deletionTime": "2020-10-30T11:56:25.973Z",
//     "isDeleted": true,
//     "id": 0
//   }
// ],
// "urgentLevel": "string",
// "description": "string",
// "requirement": "string",
// "contactEmail": "string",
// "state": "string"

export interface IRecruitmentPostItem {
  id: number;
  name: string;
  position: string;
  description: string;
  requirement: string;
  contactEmail: string;
  wayOfWork: string;
  salaryRange: string;
  state: string;
  urgentLevel: string;
  expertises: any[];
  finishDate: string;
}

class recruitmentPostStore {
  @observable recruitmentPosts!: getAllRecruitmentPostOutput<IRecruitmentPostItem>;
  @observable recruitmentPost!: IRecruitmentPostItem;

  @action
  async getAll() {
    let result = await recruitmentPostService.getAll();
    this.recruitmentPosts = result;
    console.log(this.recruitmentPosts);
  }

  @action
  async getAllByUserID(userID: number) {
    let result = await recruitmentPostService.getAllByUserID(userID);
    this.recruitmentPosts = result;
  }

  @action
  async deleteRecruitment(dto: DeleteRcruitment) {
    await recruitmentPostService.deleteRecruitment(dto);
    // this.recruitmentPosts.items = this.recruitmentPosts.items.filter((x: DeleteRcruitment) => x.id !== dto.id);
  }

  @action
  async disableRecruitment(dtodisable: DisableRecruitmentPostInput) {
    let result= await recruitmentPostService.disableRecruitment(dtodisable);
    this.recruitmentPosts=result;
    console.log(this.recruitmentPosts);
  }



}

export default recruitmentPostStore;
