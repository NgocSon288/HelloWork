import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateOrUpdateCommentInput } from '../services/dto/CommentDTO/createOrUpdateCommentInput';
import {GetAllCommentOutputRecruiter} from '../services/dto/CommentDTO/getAllCommentRecruiter'
//import { GetById } from '../services/dto/CommentDTO/getCommentById';


import CommentService from '../services/CommentService'
import { GetCommentInput } from '../services/dto/CommentDTO/GetCommentInput';
import { DeleteComment } from '../services/dto/CommentDTO/deleteComment';


export interface ICommentItemRecruiter {
    reason: string,
    description: string,
    starNumber: number,
    idRecruiter: number,
    recruiterName: string,
    recruiterCompanyName: string,
    lastModificationTime: any,
    image: any,
    id: number
}

class CommentStore {

    @observable Comments!: GetAllCommentOutputRecruiter<ICommentItemRecruiter>;
    @observable Comment!: ICommentItemRecruiter;

    @action
    async getAllComment(getCommentInput: GetCommentInput) {
        let result = await CommentService.getAllRecruiterComment(getCommentInput);
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



}

export default CommentStore;
