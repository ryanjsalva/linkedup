import React from 'react';
import {Text} from 'react-native';
import {Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';

import ProfileScene from './profileScene';
import LoginScene from './loginScene';
import EventListScene from './eventListScene';
import ChatScene from './chatScene';
import EventScene from './eventScene';
import CreateEventScene from './createEventScene';
import MatchScene from './matchScene';

const RouterWithRedux = connect()(Router);

const TabIcon = (props) => (<Text style={{ color: props.selected ? 'red' : 'black' }}>{props.title}</Text>);

export default Scenes = (() => (<RouterWithRedux>
    <Scene key="root">
        <Scene key="login" component={LoginScene} title="Login" hideNavBar={true} initial={true} />
        <Scene key="maintabs" tabs={true} hideNavBar={true}>
            <Scene key="profile" component={ProfileScene} title="Profile"  icon={TabIcon} hideNavBar={true}/>
            <Scene  key="events" component={EventListScene} title="Events"  icon={TabIcon} initial={true} hideNavBar={true}/>
            <Scene key="chat" component={ChatScene} title="Chat"  icon={TabIcon} hideNavBar={true}/>
        </Scene>
        <Scene key="event" component={EventScene} title="Event"/>
        <Scene key="createEvent" component={CreateEventScene} title="Create Event"/>
        <Scene key="match" component={MatchScene} title="Match"/>
    </Scene>
</RouterWithRedux>));