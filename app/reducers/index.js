import { combineReducers } from 'redux';

import routes from './routeReducer';
import events from './eventReducer'
import users from './userReducer';

import {ASYNC_STATES} from './../actions/index';

export default combineReducers({
    events,
    routes,
    users
});

export function createFirebaseActionReducer(initialState, handlers) {
    return function reducer(state = initialState, {type, error, payload, isFetching, args}) {
        if (handlers.hasOwnProperty(type)) {
            let newState = {...state, isFetching, error };
            return (payload ? handlers[type](newState, payload, args) : newState);
        } else {
            return state;
        }
    }
}
