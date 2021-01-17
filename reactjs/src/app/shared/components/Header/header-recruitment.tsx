import './index.less';

import * as React from 'react';
import { Col, Icon, Row } from 'antd';
import { Link } from 'react-router-dom';

export interface IHeaderProps {
  collapsed?: any;
  toggle?: any;
}

// const getUser =[{
//         name: 'Vu Cat'
//     }]

export class HeaderRecruitment extends React.Component<IHeaderProps> {
  render() {
    return (
    <div  style={{height: '65px',backgroundColor: '#3C3C3C', color: 'white', fontWeight: 'bold'}}>
      <Row>
      <Col sm={10} >
              {window.location.pathname.substring(0, 5) === "/admin" ?
                  <div style={{ textAlign: 'left'}} >
                  <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
                  </div> :
                  <div style={{padding: '0 0 12px 30px'}}>
                  <Link to="/">
                  <div style={{color: 'white',fontSize: '15px', paddingLeft: '20px'}} onClick={() => { }} >Bang tin tuyen dung</div>
                  </Link>
                  </div>
              }
        </Col>
        <Col sm={14}>
          <Col sm={3}></Col>
          <Col sm={3}>Thong ke</Col>
          <Col sm={3}>QL Quy dinh</Col>
          <Col sm={3}>QL dich vu</Col>
          <Col sm={3}>QL tuyen dung</Col>
          <Col sm={3}>QL nguoi dung</Col>
          <Col sm={3}>QL admin</Col>
          <Col sm={3}>Tin nhan</Col>
        </Col>
    </Row>,
  </div>



    )
  }
}

export default HeaderRecruitment;
