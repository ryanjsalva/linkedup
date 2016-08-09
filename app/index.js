import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import Scenes from './scenes';

const middleware = []; // No middleware for now
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

export default App = () => (<Provider store={store}>
    <Scenes/>
</Provider>);