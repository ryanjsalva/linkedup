import { combineReducers } from 'redux';

import routes from './routeReducer';
import events from './eventReducer'
import currentUser from './currentUserReducer';

export default combineReducers({
    events,
    routes,
    currentUser
});

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}