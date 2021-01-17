import * as React from 'react';

import AuthenticationStore from 'shared/stores/authenticationStore';
import Stores from 'app/shared/stores/storeIdentifier';
import { inject } from 'mobx-react';

export interface ILogoutProps {
  authenticationStore?: AuthenticationStore;
}

@inject(Stores.AuthenticationStore)
class Logout extends React.Component<ILogoutProps> {
  componentDidMount() {
    this.props.authenticationStore!.logout();
  }

  render() {
    return <div>

      {window.location.href = "/"}
    </div>
  }
}

export default Logout;
