import { List } from 'antd';
import React from 'react';

import {DataConsumer} from '../../scenes/ListCV/ListCV'

import './index.less'

export interface IHeaderProps {
    collapsed?: any;
    toggle?: any;
  }

export class Content extends React.Component<IHeaderProps> {

    render() {

        let expData = []
        for (let i = 0; i < 3; ++i) { 
            expData.push({
                period: '2019 - 2020',
                companyName: 'Công ty cổ phần UIT',
                jobName: 'Software Engineer',
                position: 'intern',
                content: 'Tôi đã làm việc trong front end cho sản phẩm đặt menu của một nhà hàng phục vụ quy mô 200 người dùng'
            })
        }

        let eduData = []
        for (let i = 0; i < 2; ++i) {
            eduData.push({
                period: '2018 - 2020',
                school: 'Trường ĐH Công Nghệ Thông Tin - ĐHQGHCM',
                major: 'Software Engineering'
            })
        }

        let achieveData = [] 
        for (let i = 0; i < 3; ++i) { 
            achieveData.push({
                name: 'IELTS 9.0',
                organization: 'British Councils',
                period: '2017 - 2018',
                content: 'Speaking 9.0 Reading 9.0 Writing 9.0 Listening 9.0'
            })
        }


        return (
            <div className="content"> 
               <div className="head-ctn">
                   <DataConsumer>
                       { ({name}) => <h1 style = {{color: 'white'}}> {name} </h1>}
                   </DataConsumer>
                    <DataConsumer> 
                        { ({bio}) => <text className = "text-constraint16" name = "bio" style = {{color: 'white'}}> {bio} </text>}
                    </DataConsumer>
                    
               </div>

               <div className="body-ctn">
                    <h3 style = {{color: '#3d3d3d'}}> Thông tin liên hệ </h3>
                    <hr></hr>
                    <div className = "row-item">
                        <div className = "row-item">
                            <a style = {{color: '#3d3d3d'}}> <b>Số điện thoại: </b> </a>
                            <DataConsumer>
                                { ({phoneNumber}) => <text className ="text-constraint" name = "phoneNumber"> {phoneNumber} </text>}
                            </DataConsumer>
                            
                        </div>
                        <div className = "row-item">
                            <a style = {{color: '#3d3d3d'}}> <b>Email: </b> </a>
                            <DataConsumer>
                                { ({email}) => <text className ="text-constraint" name = "phoneNumber"> {email} </text>}
                            </DataConsumer>
                        </div>
                        <div className = "row-item">
                            <a style = {{color: '#3d3d3d'}}> <b>Facebook: </b> </a>
                            <DataConsumer>
                                { ({facebook}) => <text className ="text-constraint" name = "phoneNumber"> {facebook} </text>}
                            </DataConsumer>
                        </div>
                        <div className = "row-item">
                            <a style = {{color: '#3d3d3d'}}> <b>Github: </b> </a>
                            <DataConsumer>
                                { ({github}) => <text className ="text-constraint" name = "phoneNumber"> {github} </text>}
                            </DataConsumer>
                        </div>
                        <div className = "row-item">
                            <a style = {{color: '#3d3d3d'}}> <b>Twitter: </b> </a>
                            <DataConsumer>
                                { ({twitter}) => <text className ="text-constraint" name = "phoneNumber"> {twitter} </text>}
                            </DataConsumer>
                        </div>
                    </div>

                    <h3 style = {{color: '#3d3d3d'}}> Kinh nghiệm làm việc </h3>
                    <hr></hr>
                    <DataConsumer>
                        {({experienceDetails}) => 
                        <List
                        id = "experiences-target"
                        itemLayout = 'vertical'
                        dataSource = {experienceDetails}
                        split = {false}
                        renderItem = {item => (
                            <List.Item >
                                <div className = "row-item-left">
                                    <a className = "text24" style = {{color: '#3d3d3d'}}> <b> {item.period} </b> </a>

                                    <div className = "text-constraint16" > 
                                        <a className = "text24"  style = {{color: '#3d3d3d'}}> <b> {item.companyName} </b> </a>
                                        <p> <b> {item.jobName} {item.jobPosition} </b> </p> 
                                        <p> {item.content} </p>
                                    </div>
                                    
                                </div>
                            </List.Item>
                          )}
                        >
                        </List>}
                    </DataConsumer>
                    

                    <h3 style = {{color: '#3d3d3d'}}> Học vấn </h3>
                    <hr></hr>
                    <DataConsumer>
                    {({educationDetails}) => 
                        <List
                        id = "educations-target"
                        itemLayout = 'vertical'
                        dataSource = {educationDetails}
                        split = {false}
                        renderItem = {item => (
                            <List.Item >
                                <div className = "row-item-left">
                                    <a className = "text24"  style = {{color: '#3d3d3d'}}> <b> {item.period} </b> </a>

                                    <div className = "text-constraint16" > 
                                        <a className = "text24"  style = {{color: '#3d3d3d'}}> <b> {item.schoolName} </b> </a>
                                        <p> <b> {item.specialize} </b> </p> 
                                    </div>
                                    
                                </div>
                            </List.Item>
                          )}
                        >
                        </List>
                        }
                    </DataConsumer>
                    

                    <h3 style = {{color: '#3d3d3d'}}> Thành tựu </h3>
                    <hr></hr>
                    <DataConsumer>
                        { ({achievementDetails}) => 
                        <List
                            id = "achievements-target"
                            itemLayout = 'vertical'
                            dataSource = {achievementDetails}
                            split = {false}
                            renderItem = {item => (
                                <List.Item >
                                    <div className = "row-item-left">
                                        <a className = "text24" style = {{color: '#3d3d3d'}}> <b> {item.period} </b> </a>
    
                                        <div className = "text-constraint16" > 
                                            <a className = "text24"  style = {{color: '#3d3d3d'}}> <b> {item.name} </b> </a>
                                            <p> <b> {item.organization} </b> </p> 
                                            <p> {item.content} </p>
                                        </div>
                                    </div>
                                </List.Item>
                              )}
                        >
                        </List>
                        }
                    </DataConsumer>
                    

                    <h3 style = {{color: '#3d3d3d'}}> Kỹ năng </h3>
                    <hr></hr>
                    <DataConsumer>
                        { ({skillDetails}) => 
                        <List
                        id = "skills-target"
                        itemLayout = 'vertical'
                        dataSource = {skillDetails}
                        split = {false}
                        renderItem = {item => (
                            <List.Item >
                                <div className = "text-constraint16">
                                    <a className = "text24" style = {{color: '#3d3d3d'}}> <b> {item.skillName} </b> </a>
                                </div>
                            </List.Item>
                          )}
                        >
                        </List>}
                    </DataConsumer>
                    
                    
               </div>
            </div>
        );
    }
}

export default Content;