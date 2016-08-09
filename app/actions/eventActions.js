import firebaseActionCreator from './firebaseActions';

export const REQUEST_EVENTS = 'EVENTS.REQUEST';
export const RECEIVE_EVENTS = 'EVENTS.RECEIVE';
export const EVENTS_ERROR = 'EVENT.ERROR';

export const fetchEvents = firebaseActionCreator({
    shouldFetch: ((state, userId) => true), //TODO - Check the cache later instead of always fetching from server
    request: (() => ({ type: REQUEST_EVENTS })),
    receive: (eventList => ({ type: RECEIVE_EVENTS, payload: { eventList } })),
    error: (error => ({ type: EVENTS_ERROR, payload: { error } })),
    fetchFromServer: (firebaseApp, userId) => /*firebaseApp.database().ref(`/users/${userId}/events`).once('value')*/fetch()
});

const fetch = (firebase, userId) => Promise.resolve([
    { name: 'event2' }, { name: 'event3' }, { name: 'event4' }, { name: 'event5' },
]);