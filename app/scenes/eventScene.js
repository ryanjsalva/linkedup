import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {Container, Spinner, Card, CardItem, Thumbnail, Content, Header, Title, Icon, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

import {fetchEvent} from './../actions/eventActions';

const EventDetails = ({event}) => {
    return (
        <Card>
            <CardItem >
                <Thumbnail source={{ uri: event.logo }}/>
                <Text>{event.name}</Text>
                <Text note>{event.location}</Text>
            </CardItem>
            <CardItem>
                <Image style={{ resizeMode: 'cover' }} source={{ uri: event.logo }}  />
            </CardItem>

            <CardItem cardBody>
                <Text>
                    {event.details}
                </Text>
            </CardItem>
        </Card>
    )
};

class Scene extends React.Component {
    refreshEvent() {
        this.props.dispatch(fetchEvent(this.props.eventId));
    }

    componentDidMount() {
        setTimeout(() => this.refreshEvent(), 500); // TODO - do this after animation is complete 
    }

    renderButton() {
        if (this.props.currentUserId == this.props.event.owner) {
            return (
                <Button transparent>
                    <Text>Edit</Text>
                </Button>
            );
        }

    }

    renderContent() {
        if (this.props.error) {
            return <Text>Error</Text>
        } else {
            return (<View>
                <EventDetails event={this.props.event}/>
                {this.props.isFetching && <Spinner/>}
                <Button onPress={() => Actions.match({ eventId: this.props.eventId }) }>
                    <Text>Match</Text>
                </Button>
            </View>);
        }
    }

    render() {
        return (<Container>
            <Header>
                <Button transparent onPress={Actions.pop}>
                    <Icon name="ios-arrow-back" />
                </Button>
                <Title>Event Details</Title>
                {this.renderButton() }
            </Header>
            <Content>
                {this.renderContent() }
            </Content>
        </Container>);
    }
}

const mapStateToProps = (({ users: {currentUserId}, events: {eventList, isFetching, error}}, {eventId}) => ({ currentUserId, event: eventList[eventId], isFetching, error }));
export default connect(mapStateToProps)(Scene);
