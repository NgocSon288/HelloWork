import './App.css';

import * as React from 'react';

import Router from 'app/shared/components/Router';
import SessionStore from 'shared/stores/sessionStore';
import SignalRAspNetCoreHelper from 'shared/lib/signalRAspNetCoreHelper';
import Stores from 'app/shared/stores/storeIdentifier';
import { inject } from 'mobx-react';

export interface IAppProps {
  sessionStore?: SessionStore;
}

@inject(Stores.SessionStore)
class App extends React.Component<IAppProps> {
  async componentDidMount() {
    await this.props.sessionStore!.getCurrentLoginInformations();

    if (!!this.props.sessionStore!.currentLogin.user && this.props.sessionStore!.currentLogin.application.features['SignalR']) {
      if (this.props.sessionStore!.currentLogin.application.features['SignalR.AspNetCore']) {
        SignalRAspNetCoreHelper.initSignalR();
      }
    }
  }

  public render() {
    return <Router />;
  }
}

export default App;
