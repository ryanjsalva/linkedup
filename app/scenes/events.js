import React from 'react';
import { View, TouchableHighlight, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import {fetchEvents} from './../actions/eventActions';

const Event = ({name, time}) => (<View>
    <Text>Event</Text>
    <Text>{name}</Text>
    <Text>{time}</Text>
</View>);

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const Events = ({ events }) => (<View style={{ marginTop: 200 }}>
    <Text>
        List of events
    </Text>
    <ListView
        dataSource={ds.cloneWithRows(events) }
        renderRow={(rowData) => <Event {...rowData}/>}
        />
</View>);

const NoEvents = ({fetchEvents}) => (<View>
    <Text>No events Found</Text>
    <TouchableHighlight onPress={fetchEvents() }>
        <Text>Fetch Events now</Text>
    </TouchableHighlight>
</View>);

const Error = () => (<View><Text>Error loading events</Text></View>);

class EventsPage extends React.Component {
    render() {
        console.log(this.props);
        return <Text style={{marginTop: 100}}>{JSON.stringify(this.props)}</Text>
    }
}

const mapStateToProps = (({ route, events, currentUser }) => ({ route, events, currentUser, isFetching: false }));
const mapDispatchToProps = (dispatch, {currentUser}) => ({ fetchEvents: dispatch(fetchEvents(currentUser)) });
export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);