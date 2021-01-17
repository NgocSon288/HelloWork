import { EntityDto } from 'shared/services/dto/entityDto';
import http from 'shared/services/httpService';
import { CreateReviewInput,
        UpdateReviewInput,
        } from './dto/jobSeekerDto/reviewDto';
// import {IReviewItem} from '../stores/reviewStore'

class ReviewService {

  public async create(createReviewInput: CreateReviewInput) {
    let result = await http.post('/api/Review/Create', createReviewInput);
    return result.data.result;
  }

  public async update(updateReviewInput: UpdateReviewInput) {
    let result = await http.put('/api/Review/Update', updateReviewInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/Review/Delete/' + entityDto.id);
    return result.data;
  }

  public async getReviewByIDjobSeeker(entityDto: EntityDto){
    let result = await http.get('/api/Review/Get/' + entityDto.id);
    return result.data.result.items[0];
  }
}

export default new ReviewService();