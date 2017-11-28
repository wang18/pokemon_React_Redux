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

export function fetchPokemonDetail(pokemonDetailUrl) {
    const request = axios.get(pokemonDetailUrl);
    //console.log("action fetch detail:");
    //console.log(request);
        return {
        type: contstants.FETCH_POKEMON_DETAILS,
        payload: request
    }

}

