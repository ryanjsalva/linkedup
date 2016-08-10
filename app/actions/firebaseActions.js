import * as firebase from 'firebase';
import config from './../config';

firebase.initializeApp(config.firebase);
const noop = (() => { });

//TODO Eventually this shhould be a middleware
export default firebaseActionCreator = ({
    shouldFetch = noop,
    request = noop,
    receive = noop,
    fetchFromServer = noop,
    error = noop
}) => (...args) => (dispatch, getState) => {
    if (shouldFetch(getState(), ...args)) {
        dispatch(request(...args));
        return fetchFromServer(firebase, ...args).then(
            (res) => dispatch(receive(res, ...args)),
            (err) => dispatch(error(err, ...args)))
    }
}

export const firebaseMap = (snap) => {
    var items = {};
    snap.forEach((child) => { items[child.key] = child.val() });
    return items;
};

export const firebaseDBOnce = (firebaseApp, path) =>
    firebaseApp.database().ref(path).once('value').then(firebaseMap)