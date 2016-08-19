import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {Container, Content, Header, Button, Title} from 'native-base';
import { Actions } from 'react-native-router-flux';

import {logout, viewProfile} from './../actions/userActions';

const UserDetails = ({profile}) => {
    return (
        <Container>
            <Image source={{uri: profile.avatar}} style={{width: 40, height: 40}} />
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
        loadProfile();
    }

    componentWillReceiveProps() {
        // FIXME Need to be called as soon as logout is clicked
        if (!this.props.currentUserId) {
            Actions.login();
        }
    }

    renderContent() {
        if (this.props.error) {
            return <Text>Error</Text>
        } else {
            return (<View>
                <UserDetails profile={this.props.userProfile}/>
                {this.props.isFetching && <Spinner/>}
            </View>);
        }
    }

    render() {
        return (<Container>
            <Header>
                <Title>Your Profile</Title>
            </Header>
            <Content>
                {this.renderContent()}
                <Button onPress={() => this.doLogout() }>
                    <Text>Logout</Text>
                </Button>
            </Content>
        </Container>);
    }
}

const mapStateToProps = (({users: {currentUserId, isFetching, error} }) => ({ currentUserId, isFetching, error }));
export default connect(mapStateToProps)(Scene);