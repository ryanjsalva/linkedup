import firebaseActionCreator from './firebaseActions';

export const USER_LOGIN_REQUEST = 'USER.LOGIN.REQUEST';
export const USER_LOGIN_RECEIVE = 'USER.LOGIN.RECEIVE';
export const USER_LOGIN_ERROR = 'USER.LOGIN.ERROR';

export const loginRequest = firebaseActionCreator({
    shouldFetch: () => true,
    request: (() => ({ type: USER_LOGIN_REQUEST })),
    receive: (currentUserId => ({ type: USER_LOGIN_RECEIVE, payload: { currentUserId } })),
    error: (error => ({ type: USER_LOGIN_ERROR, payload: { error } })),
    fetchFromServer: (firebaseApp) => Promise.resolve('user1') // Mock login till actual call is implemented
});
