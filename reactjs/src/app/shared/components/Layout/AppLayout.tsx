import './AppLayout.less';

import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import Header from '../Header';
import Footer from '../Footer';
// import LanguageSelect from '../LanguageSelect';
// import { userRouter } from '../Router/router.config';
import { navRouters } from '../Router/router.config';

import utils from 'shared/utils/utils';
// import ProtectedRoute from '../Router/ProtectedRoute';

const { Content } = Layout;

class AppLayout extends React.Component<any> {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const {
      location: { pathname },
    } = this.props;

    // const { path } = this.props.match;

    const layout = (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Layout.Header style={{ background: '#fff', minHeight: 52, padding: 0 }}>
            <Header collapsed={this.state.collapsed} toggle={this.toggle} />
          </Layout.Header>
          <Content style={{ margin: 16 }}>
            <Switch>
              {navRouters
                .filter((item: any) => !item.isLayout)
                .map((route: any, index: any) => (
                  <Route
                    exact
                    key={index}
                    path={route.path}
                    render={props => <Route component={route.component} permission={route.permission} />}
                  />
                ))}
              {/* {pathname !== '/' && <NotFoundRoute />} */}
              <Redirect from="/user" to="/login" />
            </Switch>
          </Content>
          <Layout.Footer style={{ textAlign: 'center', padding: '0 0 0 0 ' }}>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={utils.getPageTitle(pathname)}>
        {layout}
      </DocumentTitle>
    );
  }
}

export default AppLayout;
