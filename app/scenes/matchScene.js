import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Title, Button, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Scene extends React.Component {
    render() {
        return (<Container>
            <Header>
                <Button transparent onPress={Actions.pop}>
                    <Icon name="ios-arrow-back" />
                </Button>
                <Title>Match</Title>
            </Header>
            <Content>
                <Text>
                    Placeholder for Match screen
                </Text>
                <Text>
                    Matching for event - {this.props.eventId}
                </Text>
            </Content>
        </Container>);
    }
}

export default connect()(Scene);