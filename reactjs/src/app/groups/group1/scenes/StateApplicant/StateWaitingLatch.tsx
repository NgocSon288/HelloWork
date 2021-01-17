import React from 'react'
import { Typography, Button,message,Modal } from 'antd'
import picSaved from 'assets/images/2 people interviewing.svg';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import '../../styles.less'
import Stores from 'app/shared/stores/storeIdentifier'
import { inject, observer } from 'mobx-react';
import JobSeekerStore from '../../../group5/stores/jobSeekerStore'
import recruitmentPostStore from "../../../group9/stores/recruitmentPostStore"
import StateApplicantStore,{getState,IStateApplicant} from '../../stores/StateApplicantStore'
import InterviewStore,{GetInterview} from '../../stores/InterviewStore'
import { EntityDto } from 'shared/services/dto/entityDto'
const { Title } = Typography;
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


export default class StateWaitingLatch extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{
    constructor(props: any) {
        super(props);
        
    }
    componentDidMount()
    {
         this.getInterView();
         this.getJobSeeker();
         this.getRecruitment();
        
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
    delete() {
        const self = this;
        confirm({
          title: 'Bạn có muốn hủy tuyển dụng?',
          onOk() {
            self.ApplicantFail();
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      lock() {
        const self = this;
        confirm({
          title: 'Bạn có muốn chốt lịch hẹn?',
          onOk() {
            self.LockRequest();
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    async LockRequest(){
        await this.getInterView();
        await this.getStateApplicant();
        let dto:IStateApplicant={
            id: this.props.StateApplicantStore.StateApplicant.id,
            idRecuitment: this.props.StateApplicantStore.StateApplicant.idRecuitment,
            idJobSeeker: this.props.StateApplicantStore.StateApplicant.idJobSeeker,
            state: "CHO_PHONG_VAN",
        }
        await this.props.StateApplicantStore.updateStateApplicant(dto);
        if (this.props.StateApplicantStore.StateApplicant.state=="CHO_PHONG_VAN")
        message.success("Chốt lịch thành công")
        else message.error("Chốt lịch không thành công");
        let x:number=this.props.InterviewStore.interview.id;
        await this.DeleteInterview(x);
        
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
        message.success("Hủy tuyển dụng thành công")
        else message.error("Hủy tuyển dụng không thành công");
        let x:number=this.props.InterviewStore.interview.id;
        await this.DeleteInterview(x);
        
    }
    public render() {
        const {interview}=this.props.InterviewStore;
        const {jobSeeker}=this.props.jobSeekerStore;
        const {recruitmentPosts}=this.props.recruitmentPostStore;

        if (interview === undefined || jobSeeker === undefined || recruitmentPosts === undefined)
            return(<div></div>);
        const time=new Date();
        const interviewHours=time.getHours()+':'+ time.getMinutes();
        const interviewDate=time.getDate()+"-"+time.getMonth()+"-"+time.getFullYear();

        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                 <div>
            <div className="whiteBackgroundWaitingLatch" style={{alignItems: 'center' }}>
                <Title style={{marginTop: 0}}><b>Trạng thái ứng viên</b></Title>
                <Title style={{textAlign: 'center'}} level={4}>{jobSeeker.name}</Title>
                <Title style={{marginTop: 5, fontSize : 14, color: "GrayText"  }}>
                {recruitmentPosts.items[0].name} -  {recruitmentPosts.items[0].position}
                </Title>
                <img className="imageCenter" src={picSaved} alt="No"></img>

                <Title style={{textAlign: 'center'}} level={3}>Chờ chốt lịch</Title>
                <Title style={{textAlign: 'center', fontSize: 14, fontWeight:500}} level={4}>
                    Buổi phỏng vấn sẽ diễn ra tại <br></br> tại <b>{interview.location}</b> 
                    <br></br> vào lúc <b>{interviewHours} </b> ngày <b>{interviewDate}</b> 
                    <br></br>Nội dung phỏng vấn:                   
                </Title>
                <div className="description">
                    <Title style={{textAlign: 'center', fontSize: 14, fontWeight:500}} level={4}>
                     {interview.description}
                    </Title> 
                </div>
                <Button className="buttonAccept" style={{backgroundColor:"#39BD5A",color:"white"}}>Duyệt yêu cầu dời lịch</Button>
                <br></br>
                <Button className="buttonCenter"style={{backgroundColor:"#F5F5F5 "}} onClick={()=>this.delete()}>Hủy tuyển dụng</Button>
                <Button className="buttonCenter" type="primary" onClick={()=>this.lock()}>Chốt lịch hẹn</Button>

                <Title style={{textAlign: 'center', fontSize: 12, fontWeight:500, marginTop: 20,color:"#518FF5"}} level={4}>
                    Lịch phỏng vấn chỉ có hiệu lực khi bạn đã chốt            
                </Title>
            </div>
        </div>            </div>
         );
    }   
}

