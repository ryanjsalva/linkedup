import React from 'react';
import {Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Profile from './profile';
import Login from './loginScene';
import EventListScene from './eventListScene';

const RouterWithRedux = connect()(Router);

export default Scenes = (() => (<RouterWithRedux>
    <Scene key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar={true} initial={true} />
        <Scene key="profile" component={Profile} title="Profile"/>
        <Scene  key="events" component={EventListScene} title="Events" hideNavBar={false}/>
    </Scene>
</RouterWithRedux>));