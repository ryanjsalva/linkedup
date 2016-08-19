import React from 'react';
import { View, Text, Image, Spinner, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Button, Title} from 'native-base';
import { Actions } from 'react-native-router-flux';

import {logout, viewProfile} from './../actions/userActions';

const UserDetails = ({profile}) => {
    return (
        <Container>
            <Text>{profile.name}</Text>
        </Container>
    );
};

class Scene extends React.Component {
    loadProfile() {
        this.props.dispatch(viewProfile(this.props.currentUserId));
    }

    doLogout() {
        this.props.dispatch(logout());
    }

    componentDidMount() {
        setTimeout(() => this.loadProfile(), 500);
    }

    componentWillReceiveProps() {
        // FIXME Need to be called as soon as logout is clicked
        if (!this.props.currentUserId) {
            Actions.login();
        }
    }

    renderComponent({currentUserId, user, isFetching, error}) {
        if (error) {
            return <Text>Error</Text>;
        } else if (isFetching) {
            return <View style={styles.centerContent}><Spinner/></View>
        }  else if (user == null) {
            return <View style={styles.centerContent}><Spinner/></View>
        } else {
            return (<View>
                <UserDetails profile={user}/>
                {isFetching && <Spinner/>}
            </View>);
        }
    }

    render() {
        return (<Container>
            <Header>
                <Title>Your Profile</Title>
            </Header>
            <Content>
                {this.renderComponent(this.props) }
                <Button onPress={() => this.doLogout() }>
                    <Text>Logout</Text>
                </Button>
            </Content>
        </Container>);
    }
}

const mapStateToProps = (({ users: {currentUserId, userList, isFetching, error}}, {userId}) => ({ currentUserId, user: userList[userId], isFetching, error }));
export default connect(mapStateToProps)(Scene);

var styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});