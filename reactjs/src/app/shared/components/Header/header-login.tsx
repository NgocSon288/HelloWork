import './index.less';

import * as React from 'react';

import { Avatar, Badge, Dropdown, Icon, Menu } from 'antd';

import { isAllGranted, isAnyGranted, isGranted, L } from 'shared/lib/abpUtility';
// import LanguageSelect from '../LanguageSelect';
import { Link } from 'react-router-dom';

import profilePicture from 'assets/images/user.png';
import { navRouters } from '../Router/router.config';

export interface IHeaderProps {
  collapsed?: any;
  toggle?: any;
}

const userDropdownMenu = (
  <Menu>
    {/* for logout logic */}
    <Menu.Item key="2">
      <Link to="/logout">
        <Icon type="logout" />
        <span> {L('Logout')}</span>
      </Link>

    </Menu.Item>
    <Menu.Item>
      <Link to="/login">
        <Icon type="login" />
        <span> {L('Login')}</span>
      </Link>
    </Menu.Item>
  </Menu>
);
// const getUser =[{
//         name: 'Vu Cat'
//     }]

export class HeaderLogin extends React.Component<IHeaderProps> {
  render() {

    //code for menu item

    return (
      <div className='header-nav-container'>
        <div className="header" >
          {window.location.pathname.substring(0, 5) === "/admin" ?
            <div style={{ textAlign: 'left'}} >
              <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
            </div> :
            <div style={{padding: '0 0 12px 10px'}}>
            <Link to="/">
              <div style={{ width: "100px", height: "30px", color: "#8B8B8B", fontWeight: 'bold'}} onClick={() => { }} >LOGO HERE</div>
            </Link>
            </div>
          }
          <div style={{ padding: '0px 8px 0px 8px', textAlign: 'right', display: 'flex' }} >
            {/* <LanguageSelect /> {' '} */}  
            <div style={{display: 'block', fontSize: '15px', height: '30px ', padding: '0 0 0 0'}}>
                <div style={{height: '10px', margin: '2px 0 -25px 0', color: 'red'}}>Doanh nghiep can xac minh</div>
                <div style={{height: '10px', marginTop: '-15px', fontWeight: 'bold'}}>Le Hoang Minh Son</div>
            </div>
         
            <Dropdown overlay={userDropdownMenu} trigger={['click']}>
              <Badge style={{}} count={0}>
                <Avatar style={{ height: 24, width: 24, margin: '8px 15px 0 15px' }} shape="circle" alt={'profile'} src={profilePicture} />
              </Badge>
            </Dropdown>
            <a href="#" style={{fontWeight: 'bold', height: "20px", color: '#3C3C3C'}}>Dang xuat</a>
          </div>
        </div>

        <div className="navbar">
          <div style={{ display: "flex" }}>
            {navRouters.map(item =>
              item.showInNavbar === "left"
                && (!item.hideWithoutPermission ||
                  (item.hideWithoutPermission && ((item.isAny && isAnyGranted(item.permissions)) ||
                    (!item.isAny && isAllGranted(item.permissions))))) ?
                <Link style={{ padding: '0px 8px 0px 8px' }} to={item.path}>
                  {item.name}
                </Link>
                :
                <div></div>)
            }
          </div>

          <div style={{ display: "flex" }}>


            <div style={{ display: "flex" }}>
              {navRouters.map(item =>
                item.showInNavbar === "right"
                  && (!item.hideWithoutPermission ||
                    (item.hideWithoutPermission && ((item.isAny && isAnyGranted(item.permissions)) ||
                      (!item.isAny && isAllGranted(item.permissions))))) ?
                  <Link style={{ padding: '0px 8px 0px 8px' }} to={item.path}>
                    {item.name}
                  </Link>
                  :
                  <div></div>)
              }
            </div>
            {
              (isGranted('Pages.Roles') && isGranted('Pages.Tenants') && isGranted('Pages.Users')) &&
              <Link style={{ padding: '0px 8px 0px 8px' }} to="/admin">
                Quản trị
             </Link>
            }
          </div>
        </div >
      </div >
    );
  }
}

export default HeaderLogin;
