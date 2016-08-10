import {createReducer} from './index';
import * as events from './../actions/eventActions';

export default createReducer({
    isFetching: false,
    eventList: []
}, {
    [events.REQUEST_EVENTS](state) {
        return {...state, isFetching: true};
    },
    [events.RECEIVE_EVENTS](state, {payload}) {
        return {...state, ...payload, isFetching: false};
    },
    [events.EVENTS_ERROR](state, {payload}) {
        return {...state, isFetching: false, error : payload};
    }
});