import {createFirebaseAction} from './index';

export const ACTION_TYPES = {
    LOGIN: 'ACTION_TYPE > LOGIN',
    LOGOUT: 'ACTION_TYPE > LOGOUT'
}

//TODO - Login is currently mocked, this needs to be real firebase login
export const login = (userId) => createFirebaseAction(ACTION_TYPES.LOGIN, 'user1', null, Promise.resolve);
export const logout = (eventId) => createFirebaseAction(ACTION_TYPES.LOGOUT, null, null, Promise.resolve);