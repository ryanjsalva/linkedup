import {createFirebaseActionReducer} from './index';
import {ACTION_TYPES} from './../actions/userActions';

export default createFirebaseActionReducer({
    currentUserId: null,
    userList: {}
}, {
    [ACTION_TYPES.LOGIN](state, currentUserId) {
        return {...state, currentUserId};
    },
    [ACTION_TYPES.LOGOUT](state, currentUserId) {
        return {...state, currentUserId};
    },
    [ACTION_TYPES.PROFILE](state, userDetails, {userId}) {
        return {...state, userList: {...state.userList, [userId] : userDetails}};
    }
});