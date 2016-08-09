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
    <Refresh fetchEvents={fetchEvents}/>
</View>);

const Refresh = ({ fetchEvents }) => (
    <TouchableHighlight onPress={fetchEvents}>
        <Text>Fetch Events now</Text>
    </TouchableHighlight>
);

const Error = () => (<View><Text>Error loading events</Text></View>);

class EventsPage extends React.Component {
    render() {
        const {fetchEvents, eventList, isFetching} = this.props;
        return <View style={{marginTop: 100}}>
            {(eventList.length === 0 ? <NoEvents fetchEvents={fetchEvents}/> : <Events events={eventList}/>)}
        </View>;
    }
}

const mapStateToProps = (({ route, events: {eventList, isFetching}, currentUser }) => ({ route, eventList, currentUser, isFetching: false }));
const mapDispatchToProps = (dispatch, {currentUser}) => ({ fetchEvents: () => dispatch(fetchEvents(currentUser)) });
export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);