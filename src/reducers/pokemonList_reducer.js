import * as constants from '../actions/type_constants';

const IMG_ROOT_URL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const defaultList={
    totalCount: 0,
    offset: 0,
    pokemonResultList: [],
    moreItem: true,
    nextListUrl:''
};

export default function pokemonListReducer(state=defaultList, action) {
    switch (action.type){
        case constants.FETCH_POKEMON_LIST:
            const {count, next, results} = action.payload.data;
            const newPokemonResultList=[];
            results.map((eachData, i) => newPokemonResultList.push({
                name: eachData.name,
                url: eachData.url,
                imageUrl: `${IMG_ROOT_URL}${state.offset+i+1}.png`
            }));
            const nextOffset=state.offset + newPokemonResultList.length;
            const newResultList=[...state.pokemonResultList, ...newPokemonResultList];
            const newPokemonList={
                totalCount: count,
                offset: nextOffset,
                pokemonResultList: newResultList,
                moreItem:  newResultList.length < count,
                nextListUrl: next
            }
            return newPokemonList;
        default:
            return state;
    }
}
