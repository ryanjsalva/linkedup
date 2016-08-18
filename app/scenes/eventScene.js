import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {Container, Spinner, Content, Header, Title, Icon, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

import {fetchEvent} from './../actions/eventActions';

// TODO Linda to fill this in

const EventDetails = ({event}) => {
    return (
        <View>
            <Image style= {{ height: 250, width: 250 }} source={{ uri: event.logo }} />
            <Text>{event.name}</Text>
            <Text>{event.location}</Text>
            <Text>{event.details}</Text>
        </View>

    )
};
// End event details

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
                <Button block onPress={() => Actions.match({ eventId: this.props.eventId }) }>
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
