import React from 'react';
import { View, TouchableHighlight, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import {fetchEvents} from './../actions/eventActions';

const Event = ({_key, val}) => (<View>
    <Text>{_key}</Text>
    <Text>{JSON.stringify(val)}</Text>
</View>);

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const Events = (props) => (<View>
    <Text>
        List of Events
    </Text>
     <ListView
        dataSource={ds.cloneWithRows(props.eventList) }
        renderRow={(rowData) => <Event {...rowData}/>}
        />
    <Refresh {...props}/>
</View>);

const NoEvents = (props) => (<View>
    <Text>No events Found</Text>
    <Refresh {...props}/>
</View>);

const Refresh = ({onRefresh}) => (
    <TouchableHighlight onPress={onRefresh}>
        <Text>Fetch Events</Text>
    </TouchableHighlight>
);

const Error = () => (<View><Text>Error loading events</Text></View>);

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
            return <View><Text>Loading</Text></View>
        } else if (error) {
            return <View><Text>Error Try Again</Text><Refresh onRefresh={this.handleRefresh}/></View>
        } else if (eventList.length === 0) {
            return <NoEvents onRefresh={this.handleRefresh}/>
        } else {
            return <Events eventList={eventList} route={route} onRefresh={this.handleRefresh}/>
        }
    }

    render() {
        return (<View style={{ marginTop: 60 }}>
            {this.renderComponent(this.props) }
        </View>)
    }
}

const mapStateToProps = (({ route, events: {eventList, isFetching, error}, currentUser: {userId} }) => ({ route, eventList, userId, isFetching, error }));
export default connect(mapStateToProps)(EventsPage);