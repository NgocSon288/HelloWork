import http from 'shared/services/httpService';
// import {UpdateRecruitmentPostInput} from './dto/RecruimentPostDTO/UpdateRecruitmentPostInput'
// import {createOrUpdateRecruitmentPostInput} from './dto/RecruimentPostDTO/createOrUpdateRecruitmentPostInput'
import { getAllRecruitmentPostOutput } from './dto/RecruimentPostDTO/getAllRecruitmentPostOutput'
import { IRecruitmentPostItem } from '../stores/recruitmentPostStore'

import { DeleteRcruitment } from './dto/RecruimentPostDTO/DeleteRecruitmentPostInput';
import { DisableRecruitmentPostInput } from './dto/RecruimentPostDTO/DisableRecruitmentPostInput';


class recruitmentPostService {


  public async getAll(): Promise<getAllRecruitmentPostOutput<IRecruitmentPostItem>> {
    let result = await http.get('/api/RecruitmentPosts/Get');
    return result.data.result;
  }
  public async deleteRecruitment(entityDto: DeleteRcruitment) {
    let result = await http.delete('/api/RecruitmentPosts/Delete/' + entityDto.id);
    return result.data;
  }
  public async disableRecruitment(disableRecruitment: DisableRecruitmentPostInput) {
    let result = await http.put('/api/RecruitmentPosts/Disable' + disableRecruitment.state);
    console.log(disableRecruitment);
    return result.data.result;
  }

  public async getAllByUserID(userID: number): Promise<getAllRecruitmentPostOutput<IRecruitmentPostItem>> {
    let result = await http.get('/api/RecruitmentPosts/GetListByUser/' + userID);
    return result.data.result;
  }


}

export default new recruitmentPostService();