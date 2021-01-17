import React, { createContext } from "react";

import '../../styles.less'
import './ListCV.less'

import '../../Components/Option/index.less'
import '../../Components/Overview/index.less'
import '../../Components/Content/index.less'
import '../../Components/Contact/index.less'
import '../../Components/CustomCarousel/Expcarousel/index.less'
import '../../Components/CustomCarousel/AchieCarousel/index.less'
import '../../Components/CustomCarousel/EduCarousel/index.less'

import { inject, observer } from 'mobx-react';
// import { ClickAwayListener } from '@material-ui/core'
// import CustomModal from 'app/shared/components/CustomModal/CustomModal'
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';

import 'antd/dist/antd.css'
import {Col, Row} from 'antd'
import { PageHeader, Button } from 'antd';


// import Title from 'antd/lib/typography/Title';
// import Meta from 'antd/lib/card/Meta';

//import { CreateJobTypeInput } from '../../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';
// import { UpdateJobTypeInput } from '../../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';
//import { EntityDto } from 'shared/services/dto/entityDto';

// import { Option } from 'app/groups/group4/Components/Option/index'
import { Overview } from 'app/groups/group4/Components/Overview/index'
// import { Contact } from 'app/groups/group4/Components/Contact/index'
import { ExpCarousel } from 'app/groups/group4/Components/CustomCarousel/Expcarousel/index'
import { EduCarousel } from 'app/groups/group4/Components/CustomCarousel/EduCarousel/index'
import { AchieCarousel } from 'app/groups/group4/Components/CustomCarousel/AchieCarousel/index'
import { Skill } from 'app/groups/group4/Components/Skill/index'
//import { Content } from 'app/groups/group4/Components/Content/index'
import CVStore from '../../stores/CVStore';
import { ICv } from '../../models/cv';
import Contact from '../../Components/Contact';
import Content from '../../Components/Content';
// import Navbar from '../../Components/Navbar/Index';
// import Navbar from '../../Components/Navbar/Index';


export interface ICvList {
    cvStore: CVStore
}

export interface ICvState {
    cv: ICv
}   

const DataContext = createContext({
    name: 'Hello Work',
    bio: 'Software Engineer',
    phoneNumber: '0123456789',
    email: 'helloworl@gmail.com',
    facebook: 'hellowork',
    github: 'hellowork',
    twitter: 'hellowork',
    experienceDetails: [
        {
            jobName: '..........',
            companyName: '..........',
            period: '..........', // Length of job time
            jobPosition: '..........', 
            content: '..........'
        },
        {
            jobName: '..........',
            companyName: '..........',
            period: '..........', // Length of job time
            jobPosition: '..........', 
            content: '..........'
        },
        
    ],
    educationDetails: [ 
        {
            schoolName: '', 
            period: '',
            specialize: ''
        },
        
    ],
    skillDetails: [
        {
            skillName: ''
        },
    ],
    achievementDetails: [
        {
            name: '',
    		organization: '', 
    		period: '', 
    		content: ''
        }
    ],

    updateInput: (event: any) => {},
    updateInputArray: (ref: any, id: any, event: any) => {}
});

export const DataConsumer = DataContext.Consumer

@inject(Stores.cvStore)
@observer
export default class ListCV extends AppComponentBase<ICvList> {
    updateInput = (event: any) => { 
        let items = this.state;
        items = JSON.parse(JSON.stringify(items));
        //console.log(items);
        items[`${event.name}`] = event.value;

        this.setState( items );
    }

    updateInputArray = (ref: any, id: any, event: any) => {
        let items = this.state;
        items = JSON.parse(JSON.stringify(items));

        items[ref][id][`${event.name}`] = event.value;
        //console.log(items[id]);

        this.setState(  items );

    }

    // Nút save
    saveEvent = async (event: any) => { 
        console.log("Tien hanh save")

        let items = this.state;
        items = JSON.parse(JSON.stringify(items));

        let newData = {
            name: items.name,
            bio: items.bio,
            phoneNumber: items.phoneNumber,
            email: items.email,
            facebook: items.facebook,
            github: items.github,
            twitter: items.twitter,
            experienceDetails: items.experienceDetails,
            educationDetails: items.educationDetails,
            skillDetails: items.skillDetails,
            achievementDetails: items.achievementDetails
        }
    
        console.log(newData)
        
        await this.props.cvStore.createCV(newData)
    }

    state = {
        name: 'Hello Work',
        bio: 'Software Engineer',
        phoneNumber: '0123456789',
        email: 'helloworl@gmail.com',
        facebook: 'hellowork',
        github: 'hellowork',
        twitter: 'hellowork',
        experienceDetails: [
            {
                jobName: 'Software Engineer',
                companyName: 'UIT Company',
                period: '2020-2025', // Length of job time
                jobPosition: 'Senior', 
                content: 'Đã có nhiều năm kinh nghiệm'
            },
            {
                jobName: '',
                companyName: '',
                period: '', // Length of job time
                jobPosition: '', 
                content: ''
            }, 
            {
                jobName: '',
                companyName: '',
                period: '', // Length of job time
                jobPosition: '', 
                content: ''
            }
        ],
        educationDetails: [ 
            {
                schoolName: 'Trường Đại học CNTT', 
                period: '2018-2022',
                specialize: 'Kỹ thuật phần mềm'
            },
            {
                schoolName: '', 
                period: '',
                specialize: ''
            }
        ],
        achievementDetails: [
            {
                name: 'IELTS 8.0',
                organization: 'UIT Corporator', 
                period: '2018-2020', 
                content: 'Reading 9.0 Writing 9.0'
            },
            {
                name: '',
                organization: '', 
                period: '', 
                content: ''
            },
            {
                name: '',
                organization: '', 
                period: '', 
                content: ''
            }
        ],
        skillDetails: [
            {
                skillName: 'ReactJS'
            },
            {
                skillName: ''
            },
            {
                skillName: ''
            },
            {
                skillName: ''
            },
            {
                skillName: ''
            },
            
        ],
        
    
        updateInput: this.updateInput,
        updateInputArray: this.updateInputArray

    }

    public render() {
        //----------------------------------------------------
        return (
            <div>
            <PageHeader className = "white-text" style = {{background: '#3D3D3D'}}
                    ghost={false}
            
                    onBack={() => window.history.back()}
                    title = "Untitled_CV"
                    subTitle = "Chưa lưu"
                    extra = {[
                        <Button key="3"> Tải xuống </Button>,
                        <Button key="2" onClick = {this.saveEvent}> Lưu </Button>,
                        <Button key="1"> Trở về </Button>,
                    ]}
                >
            </PageHeader>

        <DataContext.Provider value = {this.state}>
            <Row>
                <Col span={7}>
                     <div style={{margin: '10px'}}>
                        <p style={{color: '#518FF5', fontSize: 24}}>Template</p>
                        
                        {/* <Option/> */}
                        <div className="input-template">
                            <div id="option-1">
                                <input type="image" id="option1" value="standard-option"/><br/>
                                <label htmlFor="option1">Cơ bản</label>
                            </div>

                            <div id="option-2">
                                <input type="image" id="option2" value="english-option"/><br/>
                                <label htmlFor="option2">Cơ bản(Tiếng Anh)</label>
                            </div>
                        </div>

                        <p style={{color: '#518FF5', fontSize: 24}}>Nội dung</p>

                        <Overview />
                        <Contact/>
                        <ExpCarousel/>
                        <EduCarousel/>
                        <AchieCarousel/>
                        <Skill/>
                    </div>
                </Col>

                <Col span={17} style={{backgroundColor: '#919191'}}>
                    <Content/>
                </Col>

            </Row>
        </DataContext.Provider>
        </div>
        );
    }
}