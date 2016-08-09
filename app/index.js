import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Scenes from './scenes';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-logger')());
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default App = () => (<Provider store={store}><Scenes/></Provider>);