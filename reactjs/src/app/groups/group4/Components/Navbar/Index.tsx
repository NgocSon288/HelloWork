import './index.less';

import * as React from 'react';

//import { Avatar, Badge, Dropdown, Icon, Menu } from 'antd';

import { Button } from 'antd';

//import { isAllGranted, isAnyGranted, isGranted, L } from 'shared/lib/abpUtility';
//import { Link } from 'react-router-dom';

//import profilePicture from 'assets/images/user.png';
//import { navRouters } from 'app/shared/components/Router/router.config';

export interface IHeaderProps {
  collapsed?: any;
  toggle?: any;
}

export class Navbar extends React.Component<IHeaderProps> {
  render() {

    //code for menu item

    return (
      <div className="navbar-container">

        <div className="navbar-left">
            <p id="title">Untitled_CV</p>
            <p id="status">Chưa lưu</p>
        </div>

        <div className="navbar-right">
            <Button className="btn-download"ghost={true}>Tải xuống</Button>
            <Button className="btn-save" ghost={true}>Lưu</Button>
            <Button type="link" ghost={true} href="/">Trở về</Button>
        </div>

      </div>
    );
  }
}

export default Navbar;
