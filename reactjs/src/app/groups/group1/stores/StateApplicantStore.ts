import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
import StateApplicantService from '../services/StateApplicantService';

export interface IStateApplicant {
    idJobSeeker: number,
    idRecuitment: number,
    state: string,
    id: number;
}
export interface  getState{
    idJobSeeker: number,
    idRecuitment: number,
}
class StateApplicantStore {
    @observable StateApplicant!:IStateApplicant;
    @observable GetStateApplicant!:getState;

    @action
        async getStateApplicantByIDJobSeeker(dto: getState) {
        let result = await StateApplicantService.getStateApplicantByIDJobSeeker(dto);
        this.StateApplicant = {
            idJobSeeker: result.idJobSeeker,
            idRecuitment: result.idRecuitment,
            state: result.state,
            id: result.id,
        };     
    }
    @action
        async getStateApplicantByID(dto: EntityDto) {
        let result = await StateApplicantService.getStateApplicantByID(dto);
        
        this.StateApplicant = {
            idJobSeeker: result.idJobSeeker,
            idRecuitment: result.idRecuitment,
            state: result.state,
            id: result.id,
      };
    }

    @action
  async updateStateApplicant(dto: IStateApplicant) {
    let result = await StateApplicantService.updateStateApplicant(dto);

    
    this.StateApplicant = {
      idJobSeeker: result.idJobSeeker,
            idRecuitment: result.idRecuitment,
            state: result.state,
            id: result.id,
    };
  }
  @action
    async createStateApplicant(dto: EntityDto) {
        let result = await StateApplicantService.createStateApplicant(dto);
        this.StateApplicant = {
          idJobSeeker: result.idJobSeeker,
          idRecuitment: result.idRecuitment,
          state: result.state,
          id: result.id,
        };
    }  
   

}

export default StateApplicantStore;
