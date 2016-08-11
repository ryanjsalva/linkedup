import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Title, Button, Icon, List, ListItem, InputGroup, Input} from 'native-base';
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

                {/* <TouchableHighlight onPress={this._onPressButton}> */}
                <TouchableHighlight>
                    <Image
                        style={{height: 250, width: 250}}
                        source={require('../assets/add_logo.png') }
                        />
                </TouchableHighlight>

                <List>
                    <ListItem>
                        <InputGroup>
                            <Input placeholder="Event Name"/>
                        </InputGroup>
                    </ListItem>

                    <ListItem>
                        <InputGroup>
                            <Input placeholder="Location"/>
                        </InputGroup>
                    </ListItem>

                    {/* <Button onPress={doLogin} > */}
                    <Button >
                        Create Event
                    </Button>

                </List>
            </Content>
        </Container>);
    }
}

export default connect()(Scene);