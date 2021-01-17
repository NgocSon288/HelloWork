import React from 'react'
import { Typography, Button } from 'antd'
import picSaved from 'assets/images/2 people interviewing.svg';
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

interface Interview {
    location : string;
    time : string;
    date : string;
    description : string;
}

export default class StateLatch extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState>{

    public render() {
        var  info : Interview = {
            location : "Song Hành, Khu phố 6, Thủ Đức, TP.HCM",
            time : "01:00 am",
            date : "10/11/2020",
            description : "Giới thiệu về doanh nghiệp, giải thích về công việc. Người phỏng vấn đặt các câu hỏi nhằm làm rõ thông tin trong hồ sơ ứng viên cũng như đánh giá khả năng thực và sự phù hợp của ứng viên",
        }

        return (
            <div style={{ margin: "auto", marginTop: "350px", width: "60%" }}>
                <StateWatingLatchComponent location={info.location} time={info.time} date={info.date} description={info.description}></StateWatingLatchComponent>
            </div>
         );
    }   
}

const StateWatingLatchComponent : React.FC<Interview> = ({location, time, date, description} : Interview) =>{
    return (
        <div>
            <div className="whiteBackgroundWaitingLatch" style={{alignItems: 'center' }}>
                <Title style={{marginTop: 0}}><b>Trạng thái việc làm</b></Title>
                <Title style={{textAlign: 'center'}} level={4}>Kỹ sư ReactJS - AngularJS - Vue - Functional Programming</Title>
                <Title style={{marginTop: 5, fontSize : 12, color: "GrayText"  }}>VND CORPORATION</Title>
                <img className="imageCenter" src={picSaved} alt="No"></img>

                <Title style={{textAlign: 'center'}} level={3}>Chờ phỏng vấn</Title>
                <Title style={{textAlign: 'center', fontSize: 14, fontWeight:500}} level={4}>
                    Hãy sắp xếp để đến buổi phỏng vấn <br></br> tại <b>{location}</b> 
                    <br></br> vào lúc <b>{time} </b> ngày <b>{date}</b> 
                    <br></br>
                    <br></br>Nội dung phỏng vấn:                   
                </Title>
                <div className="description">
                    <Title style={{textAlign: 'center', fontSize: 14, fontWeight:500}} level={4}>
                     {description}
                    </Title> 
                </div>

                <Button className="buttonCenter">Hủy ứng tuyển</Button>
                <Button className="buttonCenter" disabled={true}>Thay đổi lịch hẹn</Button>
            </div>
        </div>
    );
}