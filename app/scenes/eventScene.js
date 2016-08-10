import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Title, Icon, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Scene extends React.Component {
    render() {
        return (<Container>
            <Header>
                <Button transparent onPress={Actions.pop}>
                    <Icon name="ios-arrow-back" />
                </Button>
                <Title>Event Details</Title>
            </Header>
            <Content>
                <Text>
                    Placeholder for a Single Event Screen for {this.props.eventId}
                </Text>
                <Button block onPress={() => Actions.match({ eventId: this.props.eventId }) }>
                    <Text>Match</Text>
                </Button>
            </Content>
        </Container>);
    }
}

export default connect()(Scene);