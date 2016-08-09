import React from 'react';
import {Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Profile from './profile';
import Login from './login';
import Events from './events';

const RouterWithRedux = connect()(Router);

export default Scenes = (() => (<RouterWithRedux>
    <Scene key="root">
        <Scene key="login" component={Login} title="Login" initial={true}/>
        <Scene key="profile" component={Profile} title="Profile"/>
        <Scene key="events" component={Events} title="Events"/>
    </Scene>
</RouterWithRedux>));