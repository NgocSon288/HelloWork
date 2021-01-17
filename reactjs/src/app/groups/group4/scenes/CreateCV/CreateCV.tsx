import React from 'react'

import '../../styles.less'
import './CreateCV.less'
import { inject, observer } from 'mobx-react';
// import { ClickAwayListener } from '@material-ui/core'
// import CustomModal from 'app/shared/components/CustomModal/CustomModal'
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
import JobTypeStore from '../../stores/jobTypeStore';

import 'antd/dist/antd.css'
import { Layout, Row, Card, List, Button} from 'antd'
import {Icon} from 'antd'
//import { EditOutline, EllipsisOutline, SettingOutline } from '@ant-design/icons';

//import {Table} from 'antd'

import Title from 'antd/lib/typography/Title';
import Meta from 'antd/lib/card/Meta';

// const style = { background: '#0092ff', padding: '8px 0' };

//const numEachPage = 4   // Use a constant here to keep track of number of cards per page

//import {Form, Typography} from 'antd'

//import { CreateJobTypeInput } from '../../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';
// import { UpdateJobTypeInput } from '../../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';
//import { EntityDto } from 'shared/services/dto/entityDto';


export interface IJobTypeListProps {
    jobTypeStore: JobTypeStore;
}

export interface IJobTypeListState {
    minValue: any,
    maxValue: any
}   


@inject(Stores.jobTypeStore)
@observer
export default class ListCV extends AppComponentBase<IJobTypeListProps, IJobTypeListState> {

    handleSelectCV = () => { 
        console.log('Choose CV')
    }

    public render() {

        let data = [
            { title: "Card title1", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title2", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title3", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title4", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title5", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title6", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title7", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title8", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title9", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title10", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title11", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7"},
            { title: "Card title12", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title13", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title14", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" },
            { title: "Card title15", value: "https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/124436263_3433841093507980_3360060161014174120_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=rpOb870rIEAAX9hw_t8&_nc_ht=scontent.fsgn8-1.fna&oh=7380b90e743feec96ed1fa0866e8dd27&oe=5FD01DE7" }
          ];

    
          
        return (
                <Layout>            
                    {/* <Row gutter = {16} align = "middle" style = {{background: 'red', padding: '8px'}}> 
                            <Col style = {{background: 'pink', alignItems: ''}} >
                                <Title style = {{color: 'black'}} level = {3}> Quản lý CV </Title>
                            </Col>
                    </Row> */}
                    
                    <Row gutter = {16} style = {{background: ''}}>
                        <Title style = {{ padding: '8px',textAlign:'center' ,color: 'black'}} level = {3}> Quản lý CV </Title>
                        
                    </Row>

                    <Row style={{ background: '',padding: '8px'}}>
                        <h3> Bạn có thể tải CV lên hoặc sử dụng tính năng tạo CV của Hello Work </h3>
                        
                    </Row>

                    {/* <Row gutter={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                        <Col style = {{background: 'red', alignSelf: 'self-end'}}  span = {4} offset = {8}> 
                            <Button  type="primary" shape="round" size="large">
                                Tải tệp lên
                            </Button>     
                        </Col>
                        <Col style = {{background: 'pink'}} span = {8} offset = {1}>
                        <Button type="primary" shape="round" size={'large'}>
                                Tạo CV     
                         </Button>     
                        </Col>
                    </Row> */}

                    <div className="btn-toolbar">
                        <div role="group" className="btn-group">
                            <Button  type="primary" shape="round" size="large">
                                Tải tệp lên
                            </Button>
                            <Button  type="primary" shape="round" size="large">
                                Tạo CV
                            </Button>
                        </div>
                    </div>
                 
                    
                    {/* <Pagination defaultCurrent={1} total={50} /> */}

                    <List style = {{padding: '8px'}} grid={{
                        gutter: 24,
                        xs: 1,
                        sm: 3,
                        md: 4,
                        lg: 6,
                        xl: 4,
                        xxl: 6,
                        }}

                        pagination = {{
                            showSizeChanger: true, 
                            pageSizeOptions: ["8", "16", "32", "100"],
                            pageSize: 8
                            //position: "bottom"
                        }}

                        dataSource = {data}
                        renderItem = {val => (
                            <List.Item>                                
                              <Card 
                                bordered={true} 
                                cover = {
                                    <img src = {val.value}/>
                                    
                                }
                                
                                onClick = {this.handleSelectCV}
                                actions = {[<Icon type="delete" />, <Icon type="download" />, <Icon type="edit" />]}
                                >
                                
                                <Meta title={val.title}/>
                              </Card>
                            </List.Item>
                        )}
                        
                    ></List>
                    

                    
                </Layout>
        );
    }
}