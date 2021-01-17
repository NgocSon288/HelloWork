import React from 'react'
import { Typography } from 'antd'
import picSuccess from 'assets/images/2 people successfully dealing.svg';
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



export default class StateSuccessful extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{

    public render() {
        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <div className="whiteBackgroundSuccessful" style={{alignItems: 'center'}}>
                    <Title style={{marginTop: 0}}>Trạng thái việc làm</Title>
                    <Title style={{textAlign: 'center'}} level={4}>Kỹ sư ReactJS - AngularJS - Vue - Functional Programming</Title>
                    <Title style={{marginTop: 5, fontSize : 12, color: "GrayText"  }}>VND CORPORATION</Title>
                    <img className="imageCenter" src={picSuccess} alt="No"></img>

                    <Title style={{textAlign: 'center', fontWeight:800}} level={3}>Thành công</Title>
                    <Paragraph style={{textAlign: 'center', fontSize: 14, fontWeight:600}}>
                        Hello work! Ứng tuyển thành công.
                    </Paragraph>
                </div>
            </div>
        );
    }   
}