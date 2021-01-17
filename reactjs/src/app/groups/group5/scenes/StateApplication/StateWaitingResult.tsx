import React from 'react'
import { Typography, Button } from 'antd'
import picWaiting from 'assets/images/people waiting.svg';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import '../../styles.less'

import JobSeekerStore from '../../stores/jobSeekerStore'

const { Title, Paragraph } = Typography;

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



export default class StateWaitingResult extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{

    public render() {
        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <div className="whiteBackground" style={{alignItems: 'center'}}>
                    <Title style={{marginTop: 0}}>Trạng thái việc làm</Title>
                    <Title style={{textAlign: 'center'}} level={4}>Kỹ sư ReactJS - AngularJS - Vue - Functional Programming</Title>
                    <Title style={{marginTop: 5, fontSize : 12, color: "GrayText"  }}>VND CORPORATION</Title>
                    <img className="imageCenter" src={picWaiting} alt="No"></img>

                    <Title style={{textAlign: 'center'}} level={3}>Chờ kết quả</Title>
                    <Paragraph style={{textAlign: 'center', fontSize: 14, fontWeight:500}}>
                        Kết quả buổi phỏng vấn đang được xem xét, <br></br>
                        chúng tôi sẽ gửi thông báo đến bạn khi có kết quả.
                    </Paragraph>

                    <Button className="buttonCenter" disabled ={false}>Hủy ứng tuyển</Button>
                </div>
            </div>
        );
    }   
}