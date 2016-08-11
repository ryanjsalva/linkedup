import firebaseActionCreator, {firebaseDBOnce} from './firebaseActions';

export const REQUEST_EVENTS = 'EVENTS.REQUEST';
export const RECEIVE_EVENTS = 'EVENTS.RECEIVE';
export const EVENTS_ERROR = 'EVENTS.ERROR';

export const REQUEST_EVENT = 'EVENT.REQUEST';
export const RECEIVE_EVENT = 'EVENT.RECEIVE';
export const EVENT_ERROR = 'EVENT.ERROR';

export const fetchEvents = firebaseActionCreator({
    shouldFetch: ((state, userId) => true), //TODO - Check the cache later instead of always fetching from server
    request: (() => ({ type: REQUEST_EVENTS })),
    receive: (eventList => ({ type: RECEIVE_EVENTS, payload: { eventList } })),
    error: (error => ({ type: EVENTS_ERROR, payload: { error } })),
    fetchFromServer: (firebaseApp, userId) => firebaseDBOnce(firebaseApp, `/users/${userId}/events`)
});

export const fetchEvent = firebaseActionCreator({
    shouldFetch: ((state, eventId) => true), //TODO - Check the cache later instead of always fetching from server
    request: (() => ({ type: REQUEST_EVENT })),
    receive: (({eventId, eventDetails}) => ({ type: RECEIVE_EVENT, payload: { eventId, eventDetails } })),
    error: (error => ({ type: EVENT_ERROR, payload: { error } })),
    fetchFromServer: (firebaseApp, eventId) => firebaseDBOnce(firebaseApp, `/events/${eventId}`).then((eventDetails) => ({ eventId, eventDetails }))
});