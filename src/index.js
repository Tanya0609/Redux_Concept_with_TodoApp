import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers/index'

const store = createStore(todoApp)
// const store = createStore(rootReducer)

/*
 *  Render App
 */

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// The Store is the object that brings Actions and Reducers together. The store has the following responsibilities:
//      - Holds application state;
//      - Allows access to state via getState();
//      - Allows state to be updated via dispatch(action);
//      - Registers listeners via subscribe(listener);
//      - Handles unregistering of listeners via the function returned by subscribe(listener)
//
// store = createStore(combineReducers)
// You may optionally specify the initial state as the second argument to createStore()