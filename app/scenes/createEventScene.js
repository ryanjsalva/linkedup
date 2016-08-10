import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Title, Button, Icon, List, ListItem, Input, InputGroup} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Scene extends React.Component {
    render() {
        return (<Container>
            <Header>
                <Button transparent onPress={Actions.pop}>
                    <Icon name="ios-arrow-back" />
                </Button>
                <Title>Create Event</Title>
            </Header>
            <Content>

                {/* Form for the meetup */}
                <List>
                    <ListItem>
                        <InputGroup borderType="underline">
                            <Input placeholder="Name of your meetup"/>
                        </InputGroup>

                        <InputGroup borderType="underline">
                            <Input placeholder="Location"/>
                        </InputGroup>

                        <InputGroup borderType="underline">
                            <Input placeholder="Details"/>
                        </InputGroup>
                    </ListItem>

                </List>
                <Text>
                    Placeholder for Create Events SCene Screen
                </Text>
            </Content>
        </Container>);
    }
}

export default connect()(Scene);