import React from 'react'
import { Typography, Button,message,Modal } from 'antd'
import picWaiting from 'assets/images/submit guy.svg';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import '../../styles.less'
import Stores from 'app/shared/stores/storeIdentifier'
import { inject, observer } from 'mobx-react';
import JobSeekerStore from '../../../group5/stores/jobSeekerStore'
import recruitmentPostStore from "../../../group9/stores/recruitmentPostStore"
import StateApplicantStore,{getState,IStateApplicant} from '../../stores/StateApplicantStore'
import InterviewStore,{GetInterview} from '../../stores/InterviewStore'
import { EntityDto } from 'shared/services/dto/entityDto'
const { Title,Paragraph } = Typography;
const confirm=Modal.confirm;
//bua nao xoa nha
export interface IJobSeekerListProps {
    jobSeekerStore: JobSeekerStore;
    recruitmentPostStore:recruitmentPostStore;
    StateApplicantStore:StateApplicantStore;
    InterviewStore:InterviewStore;
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
@inject(Stores.InterviewStore)
@observer

export default class StateWaitingResult extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{
    constructor(props:any)
    {
        super(props)
    }
    componentDidMount()
    {
         this.getInterView();
         this.getJobSeeker();
         this.getRecruitment();
        
    }
    delete() {
        const self = this;
        confirm({
          title: 'Bạn có muốn từ chối ứng viên này?',
          onOk() {
            self.ApplicantFail();
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      accept() {
        const self = this;
        confirm({
          title: 'Bạn có muốn nhận ứng viên này?',
          onOk() {
            self.ApplicantPass();
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    async getInterView()
    {
        let dto:GetInterview={
            idJobSeeker:1,
            idRecuitment:1,
        }
        await this.props.InterviewStore.getInterviewByIDJS(dto);
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
    async DeleteInterview(a:number){
        let dto:EntityDto={
            id: a,
        }
        await this.props.InterviewStore.deleteInterview(dto);
    }
    async ApplicantFail(){
        await this.getInterView();
        await this.getStateApplicant();
        let dto:IStateApplicant={
            id: this.props.StateApplicantStore.StateApplicant.id,
            idRecuitment: this.props.StateApplicantStore.StateApplicant.idRecuitment,
            idJobSeeker: this.props.StateApplicantStore.StateApplicant.idJobSeeker,
            state: "THAT_BAI",
        }
        await this.props.StateApplicantStore.updateStateApplicant(dto);
        if (this.props.StateApplicantStore.StateApplicant.state=="THAT_BAI")
        message.success("Từ chối tuyển dụng thành công")
        else message.error("Từ chối tuyển dụng không thành công");
        let x:number=this.props.InterviewStore.interview.id;
        await this.DeleteInterview(x);
        
    }
    async ApplicantPass(){
        await this.getInterView();
        await this.getStateApplicant();
        let dto:IStateApplicant={
            id: this.props.StateApplicantStore.StateApplicant.id,
            idRecuitment: this.props.StateApplicantStore.StateApplicant.idRecuitment,
            idJobSeeker: this.props.StateApplicantStore.StateApplicant.idJobSeeker,
            state: "THANH_CONG",
        }
        await this.props.StateApplicantStore.updateStateApplicant(dto);
        if (this.props.StateApplicantStore.StateApplicant.state=="THANH_CONG")
        message.success("Tuyển dụng thành công")
        else message.error("Tuyển dụng không thành công");
        let x:number=this.props.InterviewStore.interview.id;
        await this.DeleteInterview(x);
        
    }
    public render() {
        const {interview}=this.props.InterviewStore;
        const {jobSeeker}=this.props.jobSeekerStore;
        const {recruitmentPosts}=this.props.recruitmentPostStore;

        if (interview === undefined || jobSeeker === undefined || recruitmentPosts === undefined)
            return(<div></div>);

        
        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <div className="whiteBackground" style={{alignItems: 'center'}}>
                    <Title style={{marginTop: 0}}><b>Trạng thái ứng viên</b></Title>
                    <Title style={{textAlign: 'center'}} level={4}>{jobSeeker.name}</Title>
                    <Title style={{marginTop: 5, fontSize : 14, color: "GrayText"  }}>
                        {recruitmentPosts.items[0].name} - {recruitmentPosts.items[0].position} </Title>
                    <img className="imageCenter" src={picWaiting} alt="No"></img>

                    <Title style={{textAlign: 'center'}} level={3}>Chờ kết quả</Title>
                    <Paragraph style={{textAlign: 'center', fontSize: 14, fontWeight:500}}>
                        Hãy cho <b>{jobSeeker.name}</b> biết kết quả sau buổi phỏng vấn 
                    </Paragraph>

                    <Button className="buttonCenter" style={{backgroundColor:"#F5F5F5 "}} onClick={()=>this.delete()}>Từ chối</Button>
                    <Button className="buttonCenter" type="primary" onClick={()=>this.accept()}>Nhận vào làm</Button>
                </div>
            </div>
        );
    }   
}