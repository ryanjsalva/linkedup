import {createFirebaseActionReducer} from './index';
import {ACTION_TYPES} from './../actions/eventActions';

export default createFirebaseActionReducer({
    eventList: {}
}, {
    [ACTION_TYPES.EVENTS](state, eventList) {
        return {...state, eventList};
    },
    [ACTION_TYPES.EVENT](state, eventDetails, {eventId}) {
        return {...state, eventList: {...state.eventList, [eventId] : eventDetails}};
    }
});
