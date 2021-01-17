import * as React from 'react';
import { Col, Row, Avatar} from 'antd';
import './index.less';
import { EnvironmentOutlined, GlobalOutlined, HomeOutlined, PhoneOutlined, RightOutlined } from '@ant-design/icons';


const Footer = () => {
  return (
    <div>

      <div style={{height: '377px', width: '100%', backgroundColor: '#515151'}}>
        <div style={{padding: '60px 100px'}}>
          <div>
            <Row>
              <Col span={6} style={{textAlign: 'left'}}>
                <span style={{fontSize: '30px',
                              color : 'white',
                              fontWeight: 'bold'}}
                >LOGO HERE</span>
                <div style={{fontSize: '15px', color: 'white', padding: '20px 0 20px 0'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam, quis quas eius ipsa sequi labore aspernatur eum, molestiae dignissimos reiciendis voluptate vero
                </div>
                <div style={{fontSize: '15px', color: '#F6CC25'}}>
                  2020 Copyrighthellowork.tech All Rights Reserved
                </div>
              </Col>
              <Col span={6}>
                <div>
                  <span style={{fontSize: '30px',
                                color: '#f6cc25',
                                fontWeight: 'bold'}}
                        className="block-head"
                  >Thong tin lien he
                  </span>
                </div>
                <div style={{margin: '20px 0 0 45px', textAlign: 'left', color: 'white'}}>
                  <div style={{marginBottom: '10px'}}>
                    <span>
                      <HomeOutlined style={{fontSize: '25px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Dia chi</span>
                  </div>
                  <div style={{marginBottom: '10px'}}>
                    <span>
                      <GlobalOutlined  style={{fontSize: '25px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Information</span>
                  </div>
                  <div style={{marginBottom: '10px'}}>
                    <span>
                      <PhoneOutlined  style={{fontSize: '25px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Dien thoai</span>
                  </div>
                  <div style={{marginBottom: '10px'}}>
                    <span>
                      <EnvironmentOutlined  style={{fontSize: '25px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Website</span>
                  </div>
                </div>
              </Col>
              <Col span={6}>
               <div style={{textAlign: 'left', paddingLeft: '50px'}}>
                  <div style={{fontSize: '30px',
                                color: '#f6cc25',
                                fontWeight: 'bold',
                                width: '300px'
                                }}
                        className="block-head"
                  >Menu             
                  </div>
                </div>
                <div style={{margin: '10px 0 0 45px', textAlign: 'left', color: 'white'}}>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                      <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Tim viec lam</span>
                  </div>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Cam nang nghe nghiep</span>
                  </div>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Dang tin tuyen dung</span>
                  </div>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Tim ho so xin viec</span>
                  </div>
                
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Gioi thieu tim ho so ung vien</span>
                  </div>
                
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>So do Website</span>
                  </div>
                
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>FAQ</span>
                  </div>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Lien he</span>
                  </div>
                
                </div>

              </Col>
              <Col span={6}>
               <div style={{textAlign: 'left', paddingLeft: '50px'}}>
                  <div style={{fontSize: '30px',
                                color: '#f6cc25',
                                fontWeight: 'bold',
                                width: '300px'
                                }}
                        className="block-head"
                  >Link             
                  </div>
                </div>
                <div style={{margin: '10px 0 0 45px', textAlign: 'left', color: 'white'}}>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                      <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Tao CV mien phi</span>
                  </div>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>TIm viec IT</span>
                  </div>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Tim viec Nhat Ban</span>
                  </div>
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Dich vu tuyen dung</span>
                  </div>
                
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Lam clip quang cao</span>
                  </div>
                
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Dich vu quan ly nhan su</span>
                  </div>
                
                  <div style={{marginBottom: '2px'}}>
                    <span>
                    <RightOutlined  style={{fontSize: '15px'}}/>
                    </span>
                    <span style={{fontSize: '15px', marginLeft: '10px'}}>Thanh lap Cong ty</span>
                  </div>
                
                </div>

              </Col>
              
            </Row>
          </div>
        </div>
      
      </div>

      <div>
        <Row gutter={[8, 8]}>
          <div className="footerGroup13"
          style={{    
            margin: '0 auto',
            height: '65px',
            width: '100%',
            background: '#8b8b8b',
            position: 'relative',
            color: 'white'
          }}
          >
          <Col span={4} ><span style={{margin: '0 auto', 
                                      fontSize: '30px',
                                      padding: '20px 20px 20px 40px',
                                      fontWeight: 'bold'
                                    }}
          >LOGO HERE</span></Col>
          <div style={{padding: '8px'}}>
          <Col span={3} >2020Copyrighthellowork.tech <br/>  All Rights Reserved</Col>
          <Col span={1}  ></Col>

          <Col span={6} style={{margin: '0 auto', }} >Email:hellowordbusinessinries@gmail.com <br/> Hotline: 123456789</Col>
          <Col span={1} ><Avatar /></Col>
          <Col span={1} ><Avatar /></Col>
          <Col span={1} ><Avatar /></Col>
          <div style = {{margin: "8px 0 0 10px "}}>
          <Col span={1} ><span>Hỗ trợ</span></Col>
          <Col span={1} >Góp ý</Col>
          <Col span={1} >FAQ</Col>
          <Col span={3} >Điều khoản và điều kiện</Col>
          </div>
          </div>
          </div>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
  