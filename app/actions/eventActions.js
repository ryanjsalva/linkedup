import {createFirebaseAction} from './index';

export const ACTION_TYPES = {
    EVENTS: 'ACTION_TYPE > EVENTS',
    EVENT: 'ACTION_TYPE > EVENT'
}

export const fetchEvents = (userId) => createFirebaseAction(ACTION_TYPES.EVENTS, `/users/${userId}/events`);
export const fetchEvent = (eventId) => createFirebaseAction(ACTION_TYPES.EVENT, `/events/${eventId}`, { eventId});