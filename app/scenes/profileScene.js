import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Button, Title} from 'native-base';
import { Actions } from 'react-native-router-flux';

import {logout} from './../actions/userActions';

class Scene extends React.Component {
    doLogout() {
        this.props.dispatch(logout());
    }

    componentWillReceiveProps() {
        // FIXME Need to be called as soon as logout is clicked
        if (!this.props.currentUserId) {
            Actions.login();
        }
    }

    render() {
        return (<Container>
            <Header>
                <Title>User profile</Title>
            </Header>
            <Content>
                <Text>
                    Placeholder for Profile Screen
                </Text>
                <Button onPress={() => this.doLogout() }>
                    <Text>Logout</Text>
                </Button>
            </Content>
        </Container>);
    }
}

const mapStateToProps = (({users: {currentUserId, isFetching, error} }) => ({ currentUserId, isFetching, error }));
export default connect(mapStateToProps)(Scene);