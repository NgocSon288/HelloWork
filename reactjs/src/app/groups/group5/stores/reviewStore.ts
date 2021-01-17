import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateReviewInput, GetAllReviewByIDOutput, UpdateReviewInput } from '../services/dto/jobSeekerDto/reviewDto';

import reviewService from '../services/reviewService'

export interface IReviewItem {
    ratingStar: string,
    idJobSeeker: number,
    numberOfReview: number,
    id: number
}

class ReviewStore {

    @observable reviews!: GetAllReviewByIDOutput<IReviewItem>;
    @observable review!: IReviewItem;

    @action
    async getReviewByID(entityDto: EntityDto) {
        let result = await reviewService.getReviewByIDjobSeeker(entityDto);
        if (result===undefined) return;
        this.review = {
            ratingStar: result.ratingStar,
            idJobSeeker: result.idJobSeeker,
            numberOfReview: result.numberOfReview,
            id: result.id,
        }
    }

    @action
    async createReview(createReviewInput: CreateReviewInput) {
        let result = await reviewService.create(createReviewInput);
        this.reviews.items.push(result);
    }

    @action
    async update(updateUserInput: UpdateReviewInput) {
        let result = await reviewService.update(updateUserInput);
        this.review = result;
        let temp : EntityDto = new EntityDto();
        temp.id = this.review.idJobSeeker;
        this.reviews = await reviewService.getReviewByIDjobSeeker(temp);
    }

    @action
    async deleteReview(entityDto: EntityDto) {
        await reviewService.delete(entityDto);
        this.reviews.items = this.reviews.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

}

export default ReviewStore;
