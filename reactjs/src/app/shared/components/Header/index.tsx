import './index.less';

import * as React from 'react';

// import {  Icon, Menu } from 'antd';

// import {  L } from 'shared/lib/abpUtility';
// import LanguageSelect from '../LanguageSelect';
// import { Link } from 'react-router-dom';

// import profilePicture from 'assets/images/user.png';
// import { navRouters } from '../Router/router.config';

import HeaderInit from './header-init';
// import HeaderInit from './header-init';
// import HeaderRecruitment from './header-recruitment';

export interface IHeaderProps {
  collapsed?: any;
  toggle?: any;
}

// const userDropdownMenu = (
//   <Menu>
//     {/* for logout logic */}
//     <Menu.Item key="2">
//       <Link to="/logout">
//         <Icon type="logout" />
//         <span> {L('Logout')}</span>
//       </Link>

//     </Menu.Item>
//     <Menu.Item>
//       <Link to="/login">
//         <Icon type="login" />
//         <span> {L('Login')}</span>
//       </Link>
//     </Menu.Item>
//   </Menu>
// );

export class Header extends React.Component<IHeaderProps> {
  render() {
    return (
    <HeaderInit/>
      // <HeaderLogin/>
      // <HeaderRecruitment/>

    );
  }
}

export default Header;
