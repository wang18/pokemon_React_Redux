import * as constants from '../actions/type_constants';

const IMG_ROOT_URL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const DEFAULTIMG_PATH='https://t00.deviantart.net/d-4_MEKW_PtWWlaAkTCD4SJJFzY=/fit-in/150x150/filters:no_upscale():origin()/pre00/cdc4/th/pre/i/2015/088/e/0/poke_ball_icon__3f1__by_epe-d8nkpxf.png';
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
            results.map((eachData, i) => {
                let dataurl = eachData.url.split('/');
                let pokeId = dataurl[dataurl.length-2];
                newPokemonResultList.push({
                name: eachData.name,
                url: eachData.url,
                imageUrl: pokeId > 10090 ?  DEFAULTIMG_PATH : `${IMG_ROOT_URL}${pokeId}.png`
            })});
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


