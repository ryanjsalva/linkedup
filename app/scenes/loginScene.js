import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Container, Content, Button, Spinner} from 'native-base';

import {loginRequest} from './../actions/userActions';

const LoginScreen = ({doLogin}) => (
    <View style={styles.centerContent}>
        <Text style={{ fontSize: 20 }}>Click the button to log in.</Text>
        <View style={{ marginTop: 20 }}>
            <Button onPress={doLogin} >
                Login
            </Button>
        </View>
    </View>);

const LoginError = ({ doLogin }) => (
    <View style={styles.centerContent}>
        <Text style={{ fontSize: 20 }}>Error during Login</Text>
        <LoginScreen doLogin={doLogin}/>
    </View>);

class Login extends React.Component {
    doLogin() {
        this.props.dispatch(loginRequest());
    }

    renderContent() {
        if (this.props.isFetching) {
            return <View><Spinner/></View>
        } else if (this.props.error) {
            return <LoginError doLogin={() => this.doLogin() }/>
        } else if (this.props.currentUserId) {
            setTimeout(() => Actions.maintabs(), 10);
        } else {
            return <LoginScreen doLogin={() => this.doLogin() }/>
        }
    }
    render() {
        return (
            <Container>
                <Content style={{ marginTop: 60 }}>
                    {this.renderContent() }
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (({users: {currentUserId, isFetching, error} }) => ({ currentUserId, isFetching, error }));
export default connect(mapStateToProps)(Login);

var styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});