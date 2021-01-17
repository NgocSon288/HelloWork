
import * as React from 'react';
// import HeaderLogin from './header-login';
// import HeaderInit from './header-init';
// import HeaderRecruitment from './header-recruitment';
import './about-us.component.css'
import { Button, Col, Divider, Rate, Row } from 'antd';
import  imgDes  from '../../../../../../../assets/images/background-home.jpg';
import moment from 'moment';
export interface AboutUsLists {
}

export class AboutUs extends React.Component<AboutUsLists> {
  state = {
    value: 4,
  };

    render() {
      return (
        <div className="container" style={{paddingTop: '30px', height: '200vh', backgroundColor: 'rgba(139, 139, 139, 0.3)', overflow: 'hidden'}}>
            <Divider orientation="center" style={{fontSize: '30px',fontWeight: 'bold'}}>Viec lam noi bat</Divider>
            <div style={{padding: '50px 200px'}}>
              <div style={{backgroundColor: 'white', borderRadius: '10px'}}>
                <Row>
                  <Col span={8} style={{paddingRight: '20px'}}>
                    <img src={imgDes} alt="" style={{width: '350px', height: '200px', borderRadius: '10px'}}/>
                  </Col>
                  <Col span={16}>
                    <div style={{padding: '10px 15px'}}>
                      <div>
                        <Row>
                          <Col span={10}>
                            <span style={{fontWeight: 'bold', fontSize: '20px', color: 'blue'}}>Technical Product Manager</span>
                          </Col>
                          <Col span={14}>
                            <span><Rate value={this.state.value} /></span>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        Cong ty TNHH Nhom 13
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Ngay ket thuc: </span>
                              <span style={{fontWeight: 'bold'}}>{moment().format('DD/MM/YYYY')}</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Muc luong: </span>
                              <span style={{fontWeight: 'bold'}}>15-20 trieu</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Tinh thanh: </span>
                              <span style={{fontWeight: 'bold'}}>Dong Nai</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Hinh thuc: </span>
                              <span style={{fontWeight: 'bold'}}>Toan thoi gian</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{paddingTop: '20px'}}>
                        <Button style={{backgroundColor: '#f5f5f5'}}>Games</Button>
                        <Button style={{marginLeft: '10px', backgroundColor: '#f5f5f5'}}>Quan ly du an</Button>
                      </div>
                    </div>
                   
                  </Col>
                </Row>
              </div>
              <div style={{backgroundColor: 'white', borderRadius: '10px', marginTop: '10px'}}>
                <Row>
                  <Col span={8} style={{paddingRight: '20px'}}>
                    <img src={imgDes} alt="" style={{width: '350px', height: '200px', borderRadius: '10px'}}/>
                  </Col>
                  <Col span={16}>
                    <div style={{padding: '10px 15px'}}>
                      <div>
                        <Row>
                          <Col span={10}>
                            <span style={{fontWeight: 'bold', fontSize: '20px', color: 'blue'}}>Technical Product Manager</span>
                          </Col>
                          <Col span={14}>
                            <span><Rate value={this.state.value} /></span>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        Cong ty TNHH Nhom 13
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Ngay ket thuc: </span>
                              <span style={{fontWeight: 'bold'}}>{moment().format('DD/MM/YYYY')}</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Muc luong: </span>
                              <span style={{fontWeight: 'bold'}}>15-20 trieu</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Tinh thanh: </span>
                              <span style={{fontWeight: 'bold'}}>Dong Nai</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Hinh thuc: </span>
                              <span style={{fontWeight: 'bold'}}>Toan thoi gian</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{paddingTop: '20px'}}>
                        <Button style={{backgroundColor: '#f5f5f5'}}>Games</Button>
                        <Button style={{marginLeft: '10px', backgroundColor: '#f5f5f5'}}>Quan ly du an</Button>
                      </div>
                    </div>
                   
                  </Col>
                </Row>
              </div>
              <div style={{backgroundColor: 'white', borderRadius: '10px', marginTop: '10px'}}>
                <Row>
                  <Col span={8} style={{paddingRight: '20px'}}>
                    <img src={imgDes} alt="" style={{width: '350px', height: '200px', borderRadius: '10px'}}/>
                  </Col>
                  <Col span={16}>
                    <div style={{padding: '10px 15px'}}>
                      <div>
                        <Row>
                          <Col span={10}>
                            <span style={{fontWeight: 'bold', fontSize: '20px', color: 'blue'}}>Technical Product Manager</span>
                          </Col>
                          <Col span={14}>
                            <span><Rate value={this.state.value} /></span>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        Cong ty TNHH Nhom 13
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Ngay ket thuc: </span>
                              <span style={{fontWeight: 'bold'}}>{moment().format('DD/MM/YYYY')}</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Muc luong: </span>
                              <span style={{fontWeight: 'bold'}}>15-20 trieu</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Tinh thanh: </span>
                              <span style={{fontWeight: 'bold'}}>Dong Nai</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Hinh thuc: </span>
                              <span style={{fontWeight: 'bold'}}>Toan thoi gian</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{paddingTop: '20px'}}>
                        <Button style={{backgroundColor: '#f5f5f5'}}>Games</Button>
                        <Button style={{marginLeft: '10px', backgroundColor: '#f5f5f5'}}>Quan ly du an</Button>
                      </div>
                    </div>
                   
                  </Col>
                </Row>
              </div>
              <div style={{backgroundColor: 'white', borderRadius: '10px', marginTop: '10px'}}>
                <Row>
                  <Col span={8} style={{paddingRight: '20px'}}>
                    <img src={imgDes} alt="" style={{width: '350px', height: '200px', borderRadius: '10px'}}/>
                  </Col>
                  <Col span={16}>
                    <div style={{padding: '10px 15px'}}>
                      <div>
                        <Row>
                          <Col span={10}>
                            <span style={{fontWeight: 'bold', fontSize: '20px', color: 'blue'}}>Technical Product Manager</span>
                          </Col>
                          <Col span={14}>
                            <span><Rate value={this.state.value} /></span>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        Cong ty TNHH Nhom 13
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Ngay ket thuc: </span>
                              <span style={{fontWeight: 'bold'}}>{moment().format('DD/MM/YYYY')}</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Muc luong: </span>
                              <span style={{fontWeight: 'bold'}}>15-20 trieu</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Tinh thanh: </span>
                              <span style={{fontWeight: 'bold'}}>Dong Nai</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Hinh thuc: </span>
                              <span style={{fontWeight: 'bold'}}>Toan thoi gian</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{paddingTop: '20px'}}>
                        <Button style={{backgroundColor: '#f5f5f5'}}>Games</Button>
                        <Button style={{marginLeft: '10px', backgroundColor: '#f5f5f5'}}>Quan ly du an</Button>
                      </div>
                    </div>
                   
                  </Col>
                </Row>
              </div>
              <div style={{backgroundColor: 'white', borderRadius: '10px', marginTop: '10px'}}>
                <Row>
                  <Col span={8} style={{paddingRight: '20px'}}>
                    <img src={imgDes} alt="" style={{width: '350px', height: '200px', borderRadius: '10px'}}/>
                  </Col>
                  <Col span={16}>
                    <div style={{padding: '10px 15px'}}>
                      <div>
                        <Row>
                          <Col span={10}>
                            <span style={{fontWeight: 'bold', fontSize: '20px', color: 'blue'}}>Technical Product Manager</span>
                          </Col>
                          <Col span={14}>
                            <span><Rate value={this.state.value} /></span>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        Cong ty TNHH Nhom 13
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Ngay ket thuc: </span>
                              <span style={{fontWeight: 'bold'}}>{moment().format('DD/MM/YYYY')}</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Muc luong: </span>
                              <span style={{fontWeight: 'bold'}}>15-20 trieu</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Tinh thanh: </span>
                              <span style={{fontWeight: 'bold'}}>Dong Nai</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Hinh thuc: </span>
                              <span style={{fontWeight: 'bold'}}>Toan thoi gian</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{paddingTop: '20px'}}>
                        <Button style={{backgroundColor: '#f5f5f5'}}>Games</Button>
                        <Button style={{marginLeft: '10px', backgroundColor: '#f5f5f5'}}>Quan ly du an</Button>
                      </div>
                    </div>
                   
                  </Col>
                </Row>
              </div>
              <div style={{backgroundColor: 'white', borderRadius: '10px', marginTop: '10px'}}>
                <Row>
                  <Col span={8} style={{paddingRight: '20px'}}>
                    <img src={imgDes} alt="" style={{width: '350px', height: '200px', borderRadius: '10px'}}/>
                  </Col>
                  <Col span={16}>
                    <div style={{padding: '10px 15px'}}>
                      <div>
                        <Row>
                          <Col span={10}>
                            <span style={{fontWeight: 'bold', fontSize: '20px', color: 'blue'}}>Technical Product Manager</span>
                          </Col>
                          <Col span={14}>
                            <span><Rate value={this.state.value} /></span>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        Cong ty TNHH Nhom 13
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Ngay ket thuc: </span>
                              <span style={{fontWeight: 'bold'}}>{moment().format('DD/MM/YYYY')}</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Muc luong: </span>
                              <span style={{fontWeight: 'bold'}}>15-20 trieu</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{padding: '15px 0 0 0'}}>
                        <Row>
                          <Col span={10}>
                            <div>
                              <span>Tinh thanh: </span>
                              <span style={{fontWeight: 'bold'}}>Dong Nai</span>
                            </div>   
                          </Col>
                          <Col span={14}>
                            <div>
                              <span>Hinh thuc: </span>
                              <span style={{fontWeight: 'bold'}}>Toan thoi gian</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{paddingTop: '20px'}}>
                        <Button style={{backgroundColor: '#f5f5f5'}}>Games</Button>
                        <Button style={{marginLeft: '10px', backgroundColor: '#f5f5f5'}}>Quan ly du an</Button>
                      </div>
                    </div>
                   
                  </Col>
                </Row>
              </div>
              
              
              </div>

        </div>

  );
}
}

export default AboutUs;