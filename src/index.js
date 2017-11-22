import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import createStoreWithMiddleware from './store';
import AppIndex from './components/App';

const storeWithMiddleware=createStoreWithMiddleware();
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
