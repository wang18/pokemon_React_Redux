import axios from 'axios';
import * as constants from './type_constants';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon/';

export function fetchPokemonList(offset) {
    const request = axios.get(`${ROOT_URL}?limit=20&offset=${offset}`);
    return {
        type: constants.FETCH_POKEMON_LIST,
        payload: request
    }
}

export function fetchPokemonDetail(pokemonDetailUrl) {
    const request = axios.get(pokemonDetailUrl);
        return {
        type: constants.FETCH_POKEMON_DETAILS,
        payload: request
    }

}

