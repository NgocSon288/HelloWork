
import {  AlipayOutlined, CodeOutlined, DingdingOutlined, DownOutlined, QqOutlined, SearchOutlined, SketchOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Input, Menu, Row } from 'antd';
import * as React from 'react';
// import HeaderLogin from './header-login';
// import HeaderInit from './header-init';
// import HeaderRecruitment from './header-recruitment';
import '../home/home.component.css'
// import AboutServices from './about-services/about-services.component';
import AboutUs from './about-us/about-us.component';
import { ContactUs } from './contact-us/contact-us.component';

export interface HomePageLists {
}

const menu = (
  <Menu>
    <Menu.Item key="1" >
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" >
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" >
      3rd menu item
    </Menu.Item>
  </Menu>
);

export class HomePage extends React.Component<HomePageLists> {
    render() {
  
      return (
        <div>
          <div className="container" style={{height: '460px'}}>
            <div className="background">
              <div style={{
                fontSize: '30px', 
                color: 'white', 
                fontWeight: 'bold',
                transform: 'translate(20%,50%)',
                letterSpacing: '1px',
                width: '72%'
                }}>
                  <span style={{paddingLeft: '15%'}}>Giai phap tim viec lam va tuyen dung Hello Work</span>
                  <div>
                    <span style={{display: 'inline-block'}}>
                      <Input style={{width:'30vw', height: '40px'}} placeholder="Tim viec lam theo tu khoa"/>
                    </span>
                    <span style={{display: 'inline-block', padding: '0 5px'}}>
                      <Dropdown overlay={menu}>
                      <Button style={{width: '15vw', height: '40px', textAlign: 'left'}}>
                        Tat ca khu vuc <DownOutlined style={{marginLeft: '100px'}} />
                      </Button>
                      </Dropdown>
                    </span>
                    <span style={{display: 'inline-block'}}>
                      <Dropdown overlay={menu}>
                      <Button style={{width: '15vw', height: '40px', textAlign: 'left'}}>
                        Tat ca khu vuc <DownOutlined style={{marginLeft: '100px'}} />
                      </Button>
                      </Dropdown>
                    </span>
                    <span style={{display: 'inline-block', paddingLeft: '5px'}}>   
                    <Button type="primary" style={{height: '40px', width:'10vw'}}>
                       <SearchOutlined/>
                       <span style={{fontWeight: 'bold'}}>Tim viec</span> 
                       </Button>
                    </span>
                  </div>
                  <div
                  style={{fontSize: '20px',
                  textAlign: 'center',
                  // border: '2px solid black',
                  borderRadius: '15px',
                  marginTop: '70px',
                  padding: '10px 30px 10px 30px',
                  fontWeight: 'normal',
                  backgroundColor: 'rgba(0,0,0,0.25)'
                  }}
                  >
                    <span>Hello Work la dich vu tuyen dung tim viec lam, tao CV, dang tin tuyen dung va tim ho so xin viec theo khu vuc, linh vuc, ky nang, va nhieu dieu kien khac.</span>
                  </div>
                </div>
              <div>
              </div>
            </div>
          </div>
          <div className="container" style={{height: '214px', overflow: 'hidden'}}>
            <div style={{ fontWeight: 'bold',
                          textAlign: 'center',
                          top: '50%',
                          fontSize: '30px',
                          paddingTop: '35px'
                          }}>
                Thong ke trang
            </div>
            <div style={{textAlign: 'center', marginTop: '5px'}}>
              <Row>
                <Col span={5}></Col>
                <Col span={3}>
                  <CodeOutlined style={{fontSize: '50px'}} />
                  <div style={{padding: '5px 0', color: 'blue', fontWeight: 'bold',fontSize: '15px'}}>Viec lam IT</div>
                  <div style={{color: 'black'}}>1024 viec</div>
                </Col>
                <Col span={3}>
                  <DingdingOutlined  style={{fontSize: '50px'}} />
                  <div style={{padding: '5px 0', color: 'blue', fontWeight: 'bold',fontSize: '15px'}}>Viec lam Nhat Ban</div>
                  <div style={{color: 'black'}}>1024 viec</div>
                </Col>
                <Col span={3}>
                  <QqOutlined  style={{fontSize: '50px'}} />
                  <div style={{padding: '5px 0', color: 'blue', fontWeight: 'bold',fontSize: '15px'}}>Ban hang/ Kinh doanh</div>
                  <div style={{color: 'black'}}>1024 viec</div>
                </Col>
                <Col span={3}>
                  <AlipayOutlined  style={{fontSize: '50px'}} />
                  <div style={{padding: '5px 0', color: 'blue', fontWeight: 'bold',fontSize: '15px'}}>Chuyen mon</div>
                  <div style={{color: 'black'}}>1024 viec</div>
                </Col>
                <Col span={3}>
                  <SketchOutlined style={{fontSize: '50px'}} />
                  <div style={{padding: '5px 0', color: 'blue', fontWeight: 'bold',fontSize: '15px'}}>Lao dong pho thong</div>
                  <div style={{color: 'black'}}>1024 viec</div>
                </Col>
                <Col span={4}></Col>
              </Row>
            </div>
          </div>
          <AboutUs/>
          <ContactUs/>
        </div>

  );
}
}

export default HomePage;