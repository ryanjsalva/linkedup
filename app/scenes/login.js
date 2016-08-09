import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Login extends React.Component {
    render() {
        return (
            <View style={{marginTop: 200}}>
                <Text>Click the button to log in.</Text>
                <TouchableHighlight onPress={Actions.events} >
                    <Text>Login here</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default connect(({routes}) => ({ routes }))(Login);