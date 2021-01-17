import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateJobSeekerInput, UpdateJobSeekerInput } from '../services/dto/jobSeekerDto/JobSeekerDto';

import jobSeekerService from '../services/jobSeekerService'

export interface IJobSeekerItem {
    name: string,
    birthday: string,
    description: string,
    workLocation: string,
    address: string,
    email: string,
    phoneNumber: string,
    expertise: string,
    facebook: string,
    github: string,
    twitter: string,
    image: string,
    field : string,
    sex : string,
    id: number
}

class JobSeekerStore {

    @observable jobSeeker!: IJobSeekerItem;

    @action
    async createJobSeeker(createJobSeekerInput: CreateJobSeekerInput) {
        await jobSeekerService.create(createJobSeekerInput);
    }

    @action
    async getJobSeekerByID(dto: EntityDto) {
        let result = await jobSeekerService.getJobSeekerByID(dto);
        this.jobSeeker = {
            name: result.name,
            birthday: result.birthday,
            description: result.description,
            workLocation: result.workLocation,
            address: result.address,
            email: result.email,
            phoneNumber: result.phoneNumber,
            expertise: result.expertise,
            facebook: result.facebook,
            github: result.github,
            twitter: result.twitter,
            image: result.image,
            field : result.field,
            sex : result.sex,
            id: result.id,
        };
        console.log("--- Jobseeker ---- ");
        //console.log(this.jobSeeker.name);
    }
    @action
    async update(updateUserInput: UpdateJobSeekerInput) {
        let result = await jobSeekerService.update(updateUserInput);
        this.jobSeeker = result;
    }

    @action
    async deleteJobSeeker(entityDto: EntityDto) {
        await jobSeekerService.delete(entityDto);
    }

}

export default JobSeekerStore;
