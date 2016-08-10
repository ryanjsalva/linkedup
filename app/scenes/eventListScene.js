import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Spinner, List, ListItem, Thumbnail, Icon} from 'native-base';

import {fetchEvents} from './../actions/eventActions';

const Event = ({_key, val}) => (
    <ListItem>
        <Thumbnail square size={40} source={{ uri: val.logo }}/>
        <Text>{val.name}</Text>
        <Text note>{val.location}</Text>
    </ListItem>
);

const Events = (props) => (<View>
    <List
        dataArray={props.eventList}
        renderRow={(rowData) => <Event {...rowData}/>}
        />
</View>);

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
        this.handleRefresh = () => props.dispatch(fetchEvents(props.userId));
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
        return (<Container style={{ marginTop: 60 }}><Content>
            {this.renderComponent(this.props) }
        </Content></Container>)
    }
}

const mapStateToProps = (({ route, events: {eventList, isFetching, error}, currentUser: {userId} }) => ({ route, eventList, userId, isFetching, error }));
export default connect(mapStateToProps)(EventsPage);

var styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});