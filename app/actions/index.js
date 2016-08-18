import * as firebase from 'firebase';
import config from './../config';

firebase.initializeApp(config.firebase);
const firebaseFetch = (path) => firebase.database().ref(path).once('value').then(snap => {
    var items = {};
    snap.forEach(child => { items[child.key] = child.val() });
    return items;
});

export const createFirebaseAction = (type, url, args, fetch = firebaseFetch) => (dispatch, getState) => {
    dispatch({ type, error: false, isFetching: true });
    fetch(url).then(
        payload => dispatch({ type, error: false, isFetching: false, payload, args }),
        error => dispatch({ type, error, isFetching: false }));
};

export const ASYNC_STATES = {
    ERROR: 'STATE > ERROR',
    INPROGRESS: 'STATE > IN PROGRESS',
    RECEIVED: 'STATE > RECEIVED'
}