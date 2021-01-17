
import { DeleteOutlined, DownloadOutlined, EditOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import * as React from 'react';
// import HeaderLogin from './header-login';
// import HeaderInit from './header-init';
// import HeaderRecruitment from './header-recruitment';
import './cv-management.component.css'

export interface CvManagementList {
}

export class CVManagement extends React.Component<CvManagementList> {
    render() {
      return (
        <div>
            <div className="bg-center">
                <div style={{
                    textAlign: 'center',
                    paddingTop: '10%'
                }}>
                    <span style={{fontSize: '30px',
                                  fontWeight: 'bold'
                                }}
                    >Quan ly CV</span>
                    <p>Ban co the tai CV len hoac su dung tinh nang tao CV cua Hello Work</p>
                    <div>
                        <Button style={{width: '120px',
                         backgroundColor: '#518FF5', 
                         color: 'white', 
                         fontWeight: 'bold',
                         height: '40px',
                         fontSize: '15px'
                          }}>
                            Tai tep len
                        </Button>
                        <Button style={{width: '120px',
                         backgroundColor: '#518FF5', 
                         color: 'white', 
                         fontWeight: 'bold',
                         height: '40px',
                         fontSize: '15px',
                         marginLeft: '15px'
                          }}>
                            Tao CV
                        </Button>
                    </div>
                </div>

                <div style={{padding: '50px 80px'}}>
                    <Row gutter={[40, 48]}>
                        <Col  span={6}>
                            <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><EditOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div style={{height: '350px'}}>  <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><EditOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div></div>
                        </Col>
                        <Col span={6}>
                            <div style={{height: '350px'}}>  <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><EditOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div></div>
                        </Col>
                        <Col span={6}>
                            <div style={{height: '350px'}}>  <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><EditOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div></div>
                        </Col>

                        <Col span={6}>
                            <div style={{height: '350px'}}>  <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><EditOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div></div>
                        </Col>
                        <Col span={6}>
                            <div style={{height: '350px'}}>  <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><EditOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div></div>
                        </Col>
                        <Col span={6}>
                            <div style={{height: '350px'}}>  <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div></div>
                        </Col>
                        <Col span={6}>
                            <div style={{height: '350px'}}>  <div style={{height: '350px'}}>
                                <div className="bg-cv"></div>
                                <div style={{textAlign: 'center', paddingTop: '5px'}}>
                                    Ten CV
                                </div>
                                <div style={{padding: '5px 25px', textAlign: 'center'}}>
                                    <Row>
                                        <Col span={6}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DownloadOutlined /></Button>
                                        </Col>
                                        <Col span={6} offset={3}>
                                        <Button type="primary" shape="circle" style={{fontSize: '20px'}} ><DeleteOutlined /></Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div></div>
                        </Col>
                    </Row>
                </div>

                <div style={{textAlign: 'center'}}>
                <Button type="primary" shape="circle" style={{backgroundColor: '#F0F2F5', borderColor: '#F0F2F5', color: 'black'}}><LeftOutlined /></Button>
                    <Button type="primary" shape="circle" style={{backgroundColor: '#F0F2F5', borderColor: '#F0F2F5', color: 'black', fontWeight: 'bold', marginLeft: '5px'}}>1</Button>
                    <Button type="primary" shape="circle" style={{backgroundColor: '#F0F2F5', borderColor: '#F0F2F5', color: 'black', fontWeight: 'bold', marginLeft: '5px'}}>2</Button>
                    <Button type="primary" shape="circle" style={{backgroundColor: '#F0F2F5', borderColor: '#F0F2F5', color: 'black', fontWeight: 'bold', marginLeft: '5px'}}>3</Button>
                    <Button type="primary" shape="circle" style={{backgroundColor: '#F0F2F5', borderColor: '#F0F2F5', color: 'black', fontWeight: 'bold', marginLeft: '5px'}}>4</Button>
                    <Button type="primary" shape="circle" style={{backgroundColor: '#F0F2F5', borderColor: '#F0F2F5', color: 'black', fontWeight: 'bold', marginLeft: '5px'}}>5</Button>
                    <Button type="primary" shape="circle" style={{backgroundColor: '#F0F2F5', borderColor: '#F0F2F5', marginLeft: '5px', color: 'black'}}><RightOutlined /></Button>
                </div>

            </div>
        </div>

  );
}
}

export default CVManagement;