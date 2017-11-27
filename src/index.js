import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import promise from 'redux-promise';
import createStoreWithMiddleware from './store/index';
import AppIndex from './components/App';

const storeWithMiddleware=createStoreWithMiddleware();
/*

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
*/

ReactDOM.render(
    <Provider store={storeWithMiddleware}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={AppIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
