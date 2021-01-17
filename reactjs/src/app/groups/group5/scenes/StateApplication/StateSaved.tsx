import React from 'react'
import { Typography, Button } from 'antd'
import picSaved from 'assets/images/saved dude.svg';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import '../../styles.less'

import JobSeekerStore from '../../stores/jobSeekerStore'

const { Title } = Typography;

//bua nao xoa nha
export interface IJobSeekerListProps {
    jobSeekerStore: JobSeekerStore;
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



export default class StateSaved extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{

    public render() {
        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <div className="whiteBackground" style={{alignItems: 'center'}}>
                    <Title style={{marginTop: 0, fontWeight:"bolder"}}>Trạng thái việc làm</Title>
                    <Title style={{textAlign: 'center', fontWeight:"bolder"}} level={4}>Kỹ sư ReactJS - AngularJS - Vue - Functional Programming</Title>
                    <Title style={{marginTop: 5, fontSize : 12, color: "GrayText"  }}>VND CORPORATION</Title>

                    <img className="imageCenter" src={picSaved} alt="No"></img>

                    <Title style={{textAlign: 'center'}} level={3}>Đã lưu</Title>
                    <Title style={{textAlign: 'center', fontSize: 14, fontWeight:"initial"}} level={4}>
                        Bạn đã lưu công việc, hãy nộp CV ngay <br></br> 
                        để tham gia ứng tuyển.
                    </Title>

                    <Button className="buttonCenter">Bỏ lưu</Button>
                    <Button className="buttonCenter" type="primary">Nộp CV</Button>
                </div>
            </div>
        );
    }   
}