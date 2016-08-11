import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Title, Icon, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

import {fetchEvent} from './../actions/eventActions';

// TODO Linda to fill this in

const EventDetails = ({event}) => {
    return (
        <View>
            <Image style= {{ height:250, width: 250 }} source={{uri: event.logo}} />
            <Text>{event.name}</Text>
            <Text>{event.location}</Text>
        </View>

    )
};
// End event details

class Scene extends React.Component {
    refreshEvent() {
        this.props.dispatch(fetchEvent(this.props.eventId));
    }

    componentDidMount() {
        this.refreshEvent(); // TODO - do this after animation is complete
    }

    renderContent() {
        if (this.props.isFetching) {
            return <Spinner/>
        } else if (this.props.error) {
            return <Text>Error</Text>
        } else {
            return (<View>
                <EventDetails event={this.props.event}/>
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
                <Button transparent>
                    <Text>Edit</Text>
                </Button>
            </Header>
            <Content>
                {this.renderContent() }
            </Content>
        </Container>);
    }
}

const mapStateToProps = (({ events: {eventList, isFetching, error}}, {eventId}) => ({ event: eventList[eventId], isFetching, error }));
export default connect(mapStateToProps)(Scene);