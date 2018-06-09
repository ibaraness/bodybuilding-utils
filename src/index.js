import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const initialState = {
    userData:{
        firstname:'',
        lastname:'',
        goal:''
    },
    bmr: {
        age:0, 
        weight:0, 
        height:0, 
        gender:0, 
        activity_level:0, 
        bmr:0
    },
    bmrModal:false
};
// Middleware you want to use in production:
const enhancer = applyMiddleware(ReduxThunk);
const store = createStore(rootReducer, initialState, composeWithDevTools(enhancer));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
