const shouldFetchEvents = (state, currentUser) => {
    return true; // TODO - Check if the Cache for this user is ready
}

const requestEvents = (currentUser) => ({
    type: REQUEST_EVENTS, payload: { currentUser }
});

const receiveEvents = (currentUser, eventList) => ({
    type: RECEIVE_EVENTS, payload: { eventList, currentUser }
});

const fetchEventsFromServer = (currentUser) => (dispatch) => {
    dispatch(requestEvents(currentUser));
    return fetch().then(response => dispatch(receiveEvents(currentUser, response)))
}

export const fetchEvents = (currentUser) => (dispatch, getState) => {
    if (shouldFetchEvents(getState(), currentUser)) {
        return dispatch(fetchEventsFromServer(currentUser));
    }
};

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECIEVE_EVENTS';

// Mock Server response
// TODO - Fetch this from Firebase
const fetch = () => Promise.resolve([
    { name: 'Event1', time: 1 },
    { name: 'Event2', time: 2 },
    { name: 'Event3', time: 3 },
    { name: 'Event4', time: 4 },
]);