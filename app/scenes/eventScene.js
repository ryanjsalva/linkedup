import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header} from 'native-base';

class Scene extends React.Component {
    render() {
        return (<Container>
            <Content>
                <Text>
                    Placeholder for a Single Event Screen
                </Text>
            </Content>
        </Container>);
    }
}

export default connect()(Scene);