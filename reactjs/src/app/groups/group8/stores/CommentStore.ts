import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateOrUpdateCommentInput } from '../services/dto/CommentDTO/createOrUpdateCommentInput';
import { GetAllCommentOutput } from '../services/dto/CommentDTO/getAllCommentOutput';
//import { GetById } from '../services/dto/CommentDTO/getCommentById';


import CommentService from '../services/CommentService'
import { GetCommentInput } from '../services/dto/CommentDTO/GetCommentInput';
import { DeleteComment } from '../services/dto/CommentDTO/deleteComment';


export interface ICommentItem {
    reason: string,
    description: string,
    starNumber: number,
    idJobSeeker: number,
    jobSeekerName: string,
    lastModificationTime: any,
    image: any,
    id: number
}

class CommentStore {

    @observable Comments!: GetAllCommentOutput<ICommentItem>;
    @observable Comment!: ICommentItem;

    @action
    async getAllComment(getCommentInput: GetCommentInput) {
        let result = await CommentService.getAll(getCommentInput);
        this.Comments = result;
        console.log(this.Comments);
    }

    @action
    async createComment(CreateOrUpdateCommentInput: CreateOrUpdateCommentInput) {
        let result = await CommentService.create(CreateOrUpdateCommentInput);
        this.Comments.items.push(result);
    }


    @action
    async getCommentById(entityDto: EntityDto) {
        let result = await CommentService.getCommentById(entityDto);
        this.Comment = result;
    }

    @action
    async deleteComment(deleteComment: DeleteComment) {
        await CommentService.delete(deleteComment);
        // this.Comments.items = this.Comments.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

    

    @action
    async getAllTestComment() {
        let result = await CommentService.getAllTest();
        this.Comments = result;
        console.log(this.Comments);
    }

}

export default CommentStore;
