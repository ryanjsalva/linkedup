import { combineReducers } from 'redux';

import routes from './routeReducer';
import events from './eventReducer'
import users from './userReducer';

export default combineReducers({
    events,
    routes,
    users
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
