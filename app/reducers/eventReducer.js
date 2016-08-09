import {createReducer} from './index';
import * as events from './../actions/eventActions';

createReducer({
    isFetching: false,
    events: []
}, {
    [events.REQUEST_EVENTS](state, action) {
        return {...state, isFetching: true};
    },
    [events.RECIEVE_EVENTS](state, action) {
        console.log(state);
        return {...state, isFetching: true };
    }
});