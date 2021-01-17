
import { Col, Row } from 'antd';
import * as React from 'react';
import './about-services.component.css'
// import HeaderLogin from './header-login';
// import HeaderInit from './header-init';
// import HeaderRecruitment from './header-recruitment';
export interface AboutUsLists {}
export class AboutServices extends React.Component<AboutUsLists> {
    render() {
      return (
          <div className="container" style={{height: '50vh', backgroundColor: 'rgb(139, 139, 139, 0.3)', padding: '40px 20% 20px 20%'}}>
            <div style={{padding: '0 30% 0 30%'}}>
                <div style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>
                    Dich Vu    
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dignissimos fugit voluptatem veritatis, amet omnis iure
                </div>
            </div>
            <div>
                <Row gutter={[48, 8]}>
                <Col span={12}>
                    <Col span={6}>
                    <div className="imgCircle">
                    </div>
                    </Col>
                    <Col span={18} style={{paddingTop: '20px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>Dich vu 1</div>
                        <div style={{fontSize: '10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus in</div>
                    </Col>
                </Col>
                <Col span={12}>
                <Col span={6}>
                    <div className="imgCircle">
                    </div>
                    </Col>
                    <Col span={18} style={{paddingTop: '20px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>Dich vu 1</div>
                        <div style={{fontSize: '10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus in</div>
                    </Col>
                </Col>
                </Row>
                <Row gutter={[48, 8]}>
                <Col span={12}>
                    <Col span={6}>
                    <div className="imgCircle">
                    </div>
                    </Col>
                    <Col span={18} style={{paddingTop: '20px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>Dich vu 1</div>
                        <div style={{fontSize: '10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus in</div>
                    </Col>
                </Col>
                <Col span={12}>
                <Col span={6}>
                    <div className="imgCircle">
                    </div>
                    </Col>
                    <Col span={18} style={{paddingTop: '20px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '20px'}}>Dich vu 1</div>
                        <div style={{fontSize: '10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ducimus in</div>
                    </Col>
                </Col>
                </Row>
            </div>
            
          </div>
        );
    }
    }
    
    export default AboutServices;