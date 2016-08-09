import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

class Profile extends React.Component {
    render() {
        return (<View style={{margin: 100}}>
            <Text>
                This is the Profile Page
            </Text>
        </View>);
    }
}

export default connect(({routes}) => ({ routes }))(Profile);