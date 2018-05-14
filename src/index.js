import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
    bmr: {
        age:0, 
        weight:0, 
        height:0, 
        gender:0, 
        activity_level:0, 
        bmr:0
    }
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
