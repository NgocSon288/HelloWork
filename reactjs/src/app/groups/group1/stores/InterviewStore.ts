import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
import InterviewService from '../services/InterviewService';
import { PagedResultDto } from 'shared/services/dto/pagedResultDto';

export interface Iinterview {
    idJobSeeker: number,
    idRecuitment: number,
    location: string,
    interviewTime: Date,
    description: string,
    id:number,
}
export interface IinterviewCreate {
  idJobSeeker: number,
  idRecuitment: number,
  location: string,
  interviewTime: Date,
  description: string,
  id:number,
  sorting: string,
    skipCount: number,
    maxResultCount: number,
}

export interface GetInterview{
    idJobSeeker:number;
    idRecuitment:number;
}

class InterviewStore {
    @observable interview!:Iinterview;
    @observable createIinterview!:IinterviewCreate;
    @observable interviews!:PagedResultDto<Iinterview>;

    @action
    async createInterviewBegin( a:number,b:number)  {
      this.interview = {
          idJobSeeker: a,
          idRecuitment: b,
          location: '',
          interviewTime: new Date(),
          description: '',
          id:0,
          
      };
    }
    @action
        async getInterviewByIDJS(dto: GetInterview) {
        let result = await InterviewService.getInterviewByIDJS(dto);
        
        this.interview = {
          idJobSeeker: result.idJobSeeker,
          idRecuitment: result.idRecuitment,
          location: result.location,
          interviewTime: result.interviewTime,
          description: result.description,
          id:result.id,
          
      };
    }
    @action
        async getInterviewByID(dto: EntityDto) {
        let result = await InterviewService.getInterviewByID(dto);
        this.interview.interviewTime=new Date();
        this.interview = {
            idJobSeeker: result.idJobSeeker,
            idRecuitment: result.idRecuitment,
            location: result.location,
            interviewTime: result.interviewTime,
            description: result.description,
            id:result.id,
            
        };
    }

    @action
  async updateInterview(dto: EntityDto) {
    let result = await InterviewService.updateInterview(dto);
    this.interview.interviewTime=new Date();
    this.interview = {
        idJobSeeker: result.idJobSeeker,
        idRecuitment: result.idRecuitment,
        location: result.location,
        interviewTime: result.interviewTime,
        description: result.description,
        id:result.id,
        
    };
  }
  @action
  async createInterview(Iinterview: Iinterview) {
    this.createIinterview={...Iinterview, sorting: "aa",
      skipCount: 0,
      maxResultCount: 1}
    let result = await InterviewService.createInterview(this.createIinterview);
    this.interview=result;
  }
  @action
  async deleteInterview(Iinterview: EntityDto) {
    let result = await InterviewService.delete(Iinterview);
    this.interview=result;
  }
 
}
//
export default InterviewStore;
