import React from 'react'
import { Typography, Button } from 'antd'
import picCancel from 'assets/images/canceled couple.svg';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import '../../styles.less'
import Stores from 'app/shared/stores/storeIdentifier'
import { inject, observer } from 'mobx-react';
import JobSeekerStore from '../../../group5/stores/jobSeekerStore'
import recruitmentPostStore from "../../../group9/stores/recruitmentPostStore"
import StateApplicantStore,{getState} from '../../stores/StateApplicantStore'

import { EntityDto } from 'shared/services/dto/entityDto'
const { Title,Paragraph } = Typography;

//bua nao xoa nha
export interface IJobSeekerListProps {
    jobSeekerStore: JobSeekerStore;
    recruitmentPostStore:recruitmentPostStore;
    StateApplicantStore:StateApplicantStore;
}

export interface IJobSeekerListState {
    modalVisible: boolean;
    selectedID: number;
    isAnyItemClicked: boolean;
    isAddJobSeekerPopupOpen: boolean;
    jobSeekerName: string,
    jobSeekerDesc: string,
    isEditJobSeekerPopupOpen: boolean,
    isVerifyDeletePopupOpen: boolean
}

@inject(Stores.recruitmentPostStore)
@inject(Stores.jobSeekerStore)
@inject(Stores.StateApplicantStore)

@observer

export default class StateRejected extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{

    constructor(props:any)
    {
        super(props)
    }
    componentDidMount()
    {
         this.getJobSeeker();
         this.getRecruitment();
        
    }
   
     getJobSeeker()
    {
        let dto:EntityDto={
            id:1,
        }
         this.props.jobSeekerStore.getJobSeekerByID(dto);
    }
    async getRecruitment()
    {
        await this.props.recruitmentPostStore.getAll();
    }
    async getStateApplicant()
    {
        
        let dto:getState={
            idJobSeeker:1,
            idRecuitment:1,
        }
        await this.props.StateApplicantStore.getStateApplicantByIDJobSeeker(dto);
        
    }
    public render() {
        const {jobSeeker}=this.props.jobSeekerStore;
        const {recruitmentPosts}=this.props.recruitmentPostStore;

        if ( jobSeeker === undefined || recruitmentPosts === undefined)
            return(<div></div>);
        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <div className="whiteBackgroundRejected" style={{alignItems: 'center'}}>
                    <Title style={{marginTop: 0}}>Trạng thái ứng viên</Title>
                    <Title style={{textAlign: 'center'}} level={4}>{jobSeeker.name}</Title>
                    <Title style={{marginTop: 5, fontSize : 14, color: "GrayText"  }}>
                        {recruitmentPosts.items[0].name} - {recruitmentPosts.items[0].position}
                    </Title>
                    <img className="imageCenter" src={picCancel} alt="No"></img>

                    <Title style={{textAlign: 'center'}} level={3}>Đã hủy</Title>
                    <Paragraph style={{textAlign: 'center', fontSize: 14, fontWeight:600}}>
                        Đơn ứng tuyển đã bị hủy
                    </Paragraph>

                    <Button className="buttonCenter" type="primary">Tìm ứng viên</Button>
                </div>
            </div>
        );
    }   
}