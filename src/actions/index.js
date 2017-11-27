import axios from 'axios';
import * as contstants from './type_constants';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon/';

export function fetchPokemonList() {
    const request = axios.get(`${ROOT_URL}?limit=20&offset=0`);
    return {
        type: contstants.FETCH_POKEMON_LIST,
        payload: request
    }
}

/*
export function fetchPokemonImg(url) {
    const request = axios.get(url);
    return {
        type: contstants.FETCH_POKEMON_IMG_LIST,
        payload: request
    }

}
*/
