import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Container, Content, Button} from 'native-base';

class Login extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.centerContent}>
                        <Text style={{ fontSize: 20 }}>Click the button to log in.</Text>
                        <View style={{ marginTop: 20 }}>
                            <Button onPress={Actions.events} >
                                Login
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect(({routes}) => ({ routes }))(Login);

var styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});