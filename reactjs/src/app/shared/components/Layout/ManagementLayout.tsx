import './ManagementLayout.less';
import * as React from 'react';

// import { Redirect, Switch, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import DocumentTitle from 'react-document-title';
import Footer from '../Footer';
import Header from '../Header';
import { Layout } from 'antd';
import ProtectedRoute from '../Router/ProtectedRoute';

import { managementRouters } from '../Router/router.config';
import utils from 'shared/utils/utils';
import SiderMenu from 'app/shared/components/SiderMenu';

// import NotFoundRoute from '../Router/NotFoundRoute';

const { Content } = Layout;

class ManagementLayout extends React.Component<any> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };

  render() {
    const {
      history,
      location: { pathname },
    } = this.props;

    const { path } = this.props.match;
    const { collapsed } = this.state;

    const layout = (
      <Layout style={{ minHeight: '100vh' }}>
        <div style={{ minHeight: '100vh', background: "#c4c4c4" }} >< SiderMenu path={path} onCollapse={this.onCollapse} history={history} collapsed={collapsed} /></div>
        <Layout>
          <Layout.Header style={{ background: '#fff', minHeight: 52, padding: 0 }}>
            <Header collapsed={this.state.collapsed} toggle={this.toggle} />
          </Layout.Header>
          <Content style={{ margin: 16 }}>
            {window.location.pathname !== '/admin' &&
              <Switch>
                {managementRouters
                  .filter((item: any) => !item.isLayout)
                  .map((route: any, index: any) => (
                    <Route
                      exact
                      key={index}
                      path={route.path}
                      render={props => <ProtectedRoute component={route.component} permissions={route.permissions} isAny = {false} />}
                    />
                  ))}
              </Switch>
            }
          </Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Layout >
    );

    return <DocumentTitle title={utils.getPageTitle(pathname)}>{layout}</DocumentTitle>;
  }
}

export default ManagementLayout;
