import { combineReducers } from 'redux';

import routes from './routeReducer';
import events from './eventReducer'

export default combineReducers({
    events,
    routes
});