import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducer from '../reducers'

const storeWithMiddleware = applyMiddleware(promise)(createStore);

export default function createStoreWithMiddleware(defaultState) {
    return storeWithMiddleware(reducer, defaultState);
}