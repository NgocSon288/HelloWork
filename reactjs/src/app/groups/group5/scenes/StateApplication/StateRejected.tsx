import React from 'react'
import { Typography, Button } from 'antd'
import picLooking from 'assets/images/girl still looking.svg';
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



export default class StateRejected extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{

    public render() {
        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <div className="whiteBackgroundRejected" style={{alignItems: 'center'}}>
                    <Title style={{marginTop: 0}}>Trạng thái việc làm</Title>
                    <Title style={{textAlign: 'center'}} level={4}>Kỹ sư ReactJS - AngularJS - Vue - Functional Programming</Title>
                    <Title style={{marginTop: 5, fontSize : 12, color: "GrayText"  }}>VND CORPORATION</Title>
                    <img className="imageCenter" src={picLooking} alt="No"></img>

                    <Title style={{textAlign: 'center'}} level={3}>Từ chối</Title>
                    <Paragraph style={{textAlign: 'center', fontSize: 14, fontWeight:600}}>
                        Đơn ứng tuyển đã bị từ chối, hãy tiếp tục tìm kiếm.
                    </Paragraph>

                    <Button className="buttonCenter" type="primary">Tìm việc làm</Button>
                </div>
            </div>
        );
    }   
}