import {createReducer} from './index';
import * as userActions from './../actions/userActions';

export default createReducer({
    currentUserId: null,
    userList: {},
    isFetching: false
}, {
    [userActions.USER_LOGIN_REQUEST](state) {
        return {...state, isFetching: true};
    },
    [userActions.USER_LOGIN_RECEIVE](state, {payload}) {
        return {...state, ...payload, isFetching: false};
    },
    [userActions.USER_LOGIN_ERROR](state, {payload}) {
        return {...state, isFetching: false, error : payload};
    },
    [userActions.USER_LOGOUT_REQUEST](state) {
        return {...state, isFetching: true};
    },
    [userActions.USER_LOGOUT_RECEIVE](state, {payload}) {
        return {...state, currentUserId: null, isFetching: false};
    },
    [userActions.USER_LOGOUT_ERROR](state, {payload}) {
        return {...state, isFetching: false, error : payload};
    }
});