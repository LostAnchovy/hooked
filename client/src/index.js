import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import authReducer from './store/reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    auth: authReducer,
})

// const store = createStore(rootReducer, applyMiddleware(thunk))

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

console.log(store)
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
