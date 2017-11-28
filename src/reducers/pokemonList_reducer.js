import * as constants from '../actions/type_constants';
import axios from 'axios';

const IMG_ROOT_URL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function pokemonListReducer(state=[], action) {
    switch (action.type){
        case constants.FETCH_POKEMON_LIST:
            //console.log('pokemonlist reducer');
            //console.log(action.payload);
            const newState=[];
            const apiData = action.payload.data.results;
            apiData.map((eachData, i) => newState.push({
                name: eachData.name,
                url: eachData.url,
                imageUrl: `${IMG_ROOT_URL}${i+1}.png`
            }));
            return newState;
        default:
            return state;
    }
}
