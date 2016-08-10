import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Spinner, List, ListItem, Thumbnail, Icon, Header, Button, Title} from 'native-base';
import { Actions } from 'react-native-router-flux';

import {fetchEvents} from './../actions/eventActions';

const Event = ({_key, val}) => (
    <ListItem button onPress={() => Actions.event({ eventId: _key }) }>
        <Thumbnail square size={40} source={{ uri: val.logo }}/>
        <Text>{val.name}</Text>
        <Text note>{val.location}</Text>
    </ListItem>
);

const Events = (props) => {
    var items = [];
    for (var _key in props.eventList) {
        items.push({ _key, val: props.eventList[_key] })
    }
    return (
        <List dataArray={items}
            renderRow={(rowData) => <Event {...rowData}/>}/>)
};

const NoEvents = (props) => (<View style={styles.centerContent}>
    <Text>No events Found</Text>
    <Refresh {...props}/>
</View>);

const Refresh = ({onRefresh}) => (
    <TouchableHighlight onPress={onRefresh}>
        <Text>Fetch Events</Text>
    </TouchableHighlight>
);

const Error = () => (<View><Spinner/></View>);

class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleRefresh = () => props.dispatch(fetchEvents(props.currentUserId));
    }

    componentDidMount() {
        this.handleRefresh();
    }

    renderComponent({route, eventList, isFetching, error}) {
        if (isFetching) {
            return <View style={styles.centerContent}><Spinner/></View>
        } else if (error) {
            return <View><Text>Error Try Again</Text><Refresh onRefresh={this.handleRefresh}/></View>
        } else if (eventList.length === 0) {
            return <NoEvents onRefresh={this.handleRefresh}/>
        } else {
            return <Events eventList={eventList} route={route} onRefresh={this.handleRefresh}/>
        }
    }

    render() {
        return (<Container>
            <Header>
                <Button transparent>
                    <Icon name="ios-cafe-outline"/>
                </Button>
                <Title>Events</Title>
                <Button transparent onPress={() => Actions.createEvent() }>
                    <Icon name="ios-create-outline" />
                </Button>
            </Header>
            <Content>
                {this.renderComponent(this.props) }
            </Content>
        </Container >)
    }
}

const mapStateToProps = (({ route, events: {eventList, isFetching, error}, users: {currentUserId} }) => ({ route, eventList, currentUserId, isFetching, error }));
export default connect(mapStateToProps)(EventsPage);

var styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});