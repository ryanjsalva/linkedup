import React from 'react';
import { View, TouchableHighlight, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

const Event = ({name, time}) => (<View>
    <Text>Event</Text>
    <Text>{name}</Text>
    <Text>{time}</Text>
</View>);

class Events extends React.Component {
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        return (<View style={{marginTop: 200}}>
            <Text>
                List of events
            </Text>
            <ListView
                dataSource={ds.cloneWithRows(this.props.events) }
                renderRow={(rowData) => <Event {...rowData}/>}
                />
        </View>);
    }
}


function mapStateToProps(state) {
    console.log(state); // state
    console.log(arguments[1]); // undefined
    return state;
}

export default connect(mapStateToProps)(Events);