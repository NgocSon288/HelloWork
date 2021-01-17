
import { Col, Row } from 'antd';
import * as React from 'react';
import './contact-us.component.css'
import  imgDes  from '../../../../../../../assets/images/background-home.jpg';
import moment from 'moment';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
export interface ContactUsLists {}
export class ContactUs extends React.Component<ContactUsLists> {
    render() {
      return (
          <div className="container" style={{height: '70vh', overflow: 'hidden'}}>
              <div style={{textAlign: 'center', margin: '50px 0 10px 0'}}>
                  <span style={{fontSize: '30px', fontWeight: 'bold'}}>Cam nang nghe nghiep</span>
              </div>
              <div>
                  <Row>
                      <Col span={2}></Col>
                      <Col span={5} style={{paddingRight: '10px'}}>
                        <div>
                            <img src={imgDes} alt="" style={{width: '100%', height: '200px', marginRight: '10px'}}/>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <p style={{textTransform: 'uppercase',
                             fontSize: '20px',
                             fontWeight: 'bold'}}>am hieu tu tin phong van tuyen dung cong ty lavie</p>
                            <p style={{fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipit aliquid dolor commodi architecto, illum asperiores ipsum non quidem sapiente </p>
                        </div>
                        <div>
                            <Row>
                                <Col span={10}>
                                    <CalendarOutlined />
                                    <span>{moment().format('DD/MM/YYYY')}</span>
                                </Col>
                                <Col span={10}>
                                    <UserOutlined />
                                    <span>100 luot xem</span>
                                </Col>
                            </Row>
                        </div>
                      </Col>
                      <Col span={5} style={{paddingRight: '10px'}}> <div>
                            <img src={imgDes} alt="" style={{width: '100%', height: '200px'}}/>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <p style={{textTransform: 'uppercase',
                             fontSize: '20px',
                             fontWeight: 'bold'}}>am hieu tu tin phong van tuyen dung cong ty lavie</p>
                            <p style={{fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipit aliquid dolor commodi architecto, illum asperiores ipsum non quidem sapiente </p>
                        </div>
                        <div>
                            <Row>
                                <Col span={10}>
                                    <CalendarOutlined />
                                    <span>{moment().format('DD/MM/YYYY')}</span>
                                </Col>
                                <Col span={10}>
                                    <UserOutlined />
                                    <span>100 luot xem</span>
                                </Col>
                            </Row>
                        </div></Col>
                      <Col span={5} style={{paddingRight: '10px'}}> <div>
                            <img src={imgDes} alt="" style={{width: '100%', height: '200px'}}/>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <p style={{textTransform: 'uppercase',
                             fontSize: '20px',
                             fontWeight: 'bold'}}>am hieu tu tin phong van tuyen dung cong ty lavie</p>
                            <p style={{fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipit aliquid dolor commodi architecto, illum asperiores ipsum non quidem sapiente </p>
                        </div>
                        <div>
                            <Row>
                                <Col span={10}>
                                    <CalendarOutlined />
                                    <span>{moment().format('DD/MM/YYYY')}</span>
                                </Col>
                                <Col span={10}>
                                    <UserOutlined />
                                    <span>100 luot xem</span>
                                </Col>
                            </Row>
                        </div></Col>
                      <Col span={5} style={{paddingRight: '10px'}}> <div>
                            <img src={imgDes} alt="" style={{width: '100%', height: '200px'}}/>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <p style={{textTransform: 'uppercase',
                             fontSize: '20px',
                             fontWeight: 'bold'}}>am hieu tu tin phong van tuyen dung cong ty lavie</p>
                            <p style={{fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipit aliquid dolor commodi architecto, illum asperiores ipsum non quidem sapiente </p>
                        </div>
                        <div>
                            <Row>
                                <Col span={10}>
                                    <CalendarOutlined />
                                    <span>{moment().format('DD/MM/YYYY')}</span>
                                </Col>
                                <Col span={10}>
                                    <UserOutlined />
                                    <span>100 luot xem</span>
                                </Col>
                            </Row>
                        </div></Col>
                      <Col span={2}></Col>
                  </Row>
              </div>
          </div>
        );
    }
    }
    
    export default ContactUs;