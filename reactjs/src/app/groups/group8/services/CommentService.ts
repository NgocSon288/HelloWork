import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
import http from 'shared/services/httpService';
import { CreateOrUpdateCommentInput } from './dto/CommentDTO/createOrUpdateCommentInput';
import { GetAllCommentOutput } from './dto/CommentDTO/getAllCommentOutput';
import {DeleteComment} from './dto/CommentDTO/deleteComment';
import {ICommentItem} from '../stores/CommentStore'
import { GetCommentInput } from './dto/CommentDTO/GetCommentInput';
import { ICommentItemRecruiter } from '../stores/CommentStoreRecruiter';
import { GetAllCommentOutputRecruiter } from './dto/CommentDTO/getAllCommentRecruiter';
class CommentService {
  public async getAll(getCommentInput: GetCommentInput): Promise<GetAllCommentOutput<ICommentItem>> {
    let result = await http.get('/api/Comments/Gets/' + getCommentInput.isRecruiterWrite + "/" + getCommentInput.ID);
    return result.data.result;
  }
  public async getAllRecruiterComment(getCommentInput: GetCommentInput): Promise<GetAllCommentOutputRecruiter<ICommentItemRecruiter>> {
    let result = await http.get('/api/Comments/Gets/' + getCommentInput.isRecruiterWrite + "/" + getCommentInput.ID);
    return result.data.result;
  }

  public async create(createCommentInput: CreateOrUpdateCommentInput) {
    let result = await http.post('/api/Comments/CreateOrUpdate', createCommentInput);
    return result.data.result;
  }

  public async getCommentById(entityDto: EntityDto) {
    let result = await http.get('/api/Comments/Get/{id}' + entityDto.id);
    return result.data;
  }

  public async delete(input: DeleteComment) {
    let result = await http.delete('api/Comments/Delete/' + input.idRecruiter + "/" + input.idJobSeeker + "/" + input.isRecruiterWrite);
    return result.data;
  }

  
  public async getAllTest(): Promise<GetAllCommentOutput<ICommentItem>> {
    let result = await http.get('/api/Comments/GetAllTest');
    return result.data.result;
  }


}

export default new CommentService();