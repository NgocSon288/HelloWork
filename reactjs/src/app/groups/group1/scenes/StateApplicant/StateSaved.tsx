import React from 'react'
import { Typography, Button,message,Modal } from 'antd'
import picSaved from 'assets/images/saved dude.svg';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import '../../styles.less'
import { inject, observer } from 'mobx-react';
import {EntityDto} from 'shared/services/dto/entityDto';
import jobSeekerStore from '../../../group5/stores/jobSeekerStore'
import recruitmentPostStore from "../../../group9/stores/recruitmentPostStore"
import StateApplicantStore, { getState,IStateApplicant } from '../../stores/StateApplicantStore'
import Stores from 'app/shared/stores/storeIdentifier';
import CreateOrUpdateInterview from '../../components/CompanyInfo/CreateOrUpdateInterview';
import InterviewStore from '../../stores/InterviewStore'

const { Title } = Typography;
const confirm=Modal.confirm;
//bua nao xoa nha
export interface IJobSeekerListProps {
    jobSeekerStore: jobSeekerStore;
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
    isVerifyDeletePopupOpen: boolean,
    recruitmentName:string,
    stateApplicantID:number,
}

@inject(Stores.recruitmentPostStore)
@inject(Stores.jobSeekerStore)
@inject(Stores.StateApplicantStore)
@inject(Stores.InterviewStore)
@observer

export default class StateSaved extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{
    formRef:any;
    constructor(props: any) {
        super(props);
        this.state =
        {
            modalVisible: false,
            selectedID: 1,
            isAnyItemClicked: false,
            isAddJobSeekerPopupOpen: false,
            jobSeekerName: "",
            jobSeekerDesc: "",
            isEditJobSeekerPopupOpen: false,
            isVerifyDeletePopupOpen: false,
            recruitmentName:"1",
            stateApplicantID:0,
        }

    }
    delete(a:number,b:number) {
        const self = this;
        confirm({
          title: 'Bạn có muốn hủy lưu ứng viên này?',
          onOk() {
            self.UnSaved(a,b);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    async getJobSeekerInfoByID() {
        let dto: EntityDto =
        {
            id: this.state.selectedID,
        }
        
        this.props.jobSeekerStore.getJobSeekerByID(dto);
        
    }
    async getRecruitmentInfoByID() {
        
         this.props.recruitmentPostStore.getAll();
    }
    Modal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    };
    componentDidMount(){
         this.getJobSeekerInfoByID();
         this.getRecruitmentInfoByID();
    }
    saveFormRef = (formRef: any) => {
        this.formRef = formRef;
    };
    async UpdateModalOpen(a:number,b:number) 
    {
        await this.props.InterviewStore.createInterviewBegin(a,b);
        await this.Modal();
        await this.formRef.props.form.setFieldsValue({
                ...this.props.InterviewStore.interview
            })
        let dto:getState={
            idJobSeeker:a,
            idRecuitment: b
        }
        await this.props.StateApplicantStore.getStateApplicantByIDJobSeeker(dto);
    }
    async UnSaved(a:number,b:number)
    {
        let dto1:getState={
            idJobSeeker:a,
            idRecuitment: b
        }
        await this.props.StateApplicantStore.getStateApplicantByIDJobSeeker(dto1);
        let dto:IStateApplicant={
            id: this.props.StateApplicantStore.StateApplicant.id,
            idRecuitment: this.props.StateApplicantStore.StateApplicant.idRecuitment,
            idJobSeeker: this.props.StateApplicantStore.StateApplicant.idJobSeeker,
            state: "KHONG_LUU",
        }
        await this.props.StateApplicantStore.updateStateApplicant(dto);
        if (this.props.StateApplicantStore.StateApplicant.state=="KHONG_LUU")
        message.success("Đã bỏ lưu thành công")
        else message.error("Bỏ lưu không thành công");
    }
    handleCreate = () => {
        const form = this.formRef.props.form;
    
        form.validateFields(async (err: any, values: any) => {
          if (err) {
            return;
          } else {
              await this.props.InterviewStore.createInterview(values);
              
            }
            this.setState({ modalVisible: false });
            form.resetFields();
            let dto:IStateApplicant={
                id: this.props.StateApplicantStore.StateApplicant.id,
                idRecuitment: this.props.StateApplicantStore.StateApplicant.idRecuitment,
                idJobSeeker: this.props.StateApplicantStore.StateApplicant.idJobSeeker,
                state: "CHO_CHOT_LICH",
            }
            this.props.StateApplicantStore.updateStateApplicant(dto);
            if (this.props.StateApplicantStore.StateApplicant.state=="CHO_CHOT_LICH")
                message.success("Đã mời phỏng vấn")
            else message.error("Mời phỏng vấn không thành công");
        });
        
      };
    public render() {
        const {jobSeeker}=this.props.jobSeekerStore; 
        const {recruitmentPosts} = this.props.recruitmentPostStore;
        if ( jobSeeker === undefined || recruitmentPosts === undefined)
            return(<div></div>);
        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <div className="whiteBackground" style={{alignItems: 'center'}}>
                    
                    <Title style={{marginTop: 0, fontWeight:"bolder"}}>Trạng thái ứng viên</Title>
                    <Title style={{textAlign: 'center', fontWeight:"bolder"}} level={4}>{jobSeeker.name}    </Title>
                    <img className="imageCenter" src={picSaved} alt="No"></img>

                    <Title style={{textAlign: 'center'}} level={3}>Đã lưu</Title>
                    <Title style={{textAlign: 'center', fontSize: 14, fontWeight:"initial"}} level={4}>
                        Có vị trí cho <b>{jobSeeker.name}?</b> Mời làm việc ngay
                    </Title>

                    <Button className="buttonCenter" style={{backgroundColor:"#F5F5F5 "}} onClick={()=> this.delete(jobSeeker.id,recruitmentPosts.items[0].id )}>Bỏ lưu</Button>
                   
                    <Button className="buttonCenter" type="primary" onClick={() => this.UpdateModalOpen( jobSeeker.id,recruitmentPosts.items[0].id )}>Mời phỏng vấn</Button>
                    <CreateOrUpdateInterview
                        wrappedComponentRef={this.saveFormRef}
                        visible={this.state.modalVisible}
                        onCancel={() =>
                            this.setState({
                            modalVisible: false,
                            })
                        }
                        onCreate={this.handleCreate}
                    />
                </div>
            </div>
        );
    }   
}