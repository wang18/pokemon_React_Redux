import { combineReducers } from 'redux';
import pokemonList from './pokemonList_reducer';
import pokemonDetails from './pokemonDetail_reducer';

const rootReducer = combineReducers({
    pokemonList: pokemonList,
    pokemonDetails: pokemonDetails
});

export default rootReducer;