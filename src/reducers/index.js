import { combineReducers } from 'redux';
import pokemonList from './pokemonList_reducer';

const rootReducer = combineReducers({
    pokemonList: pokemonList
});

export default rootReducer;