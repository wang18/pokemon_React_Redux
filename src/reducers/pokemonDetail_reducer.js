import * as constants from '../actions/type_constants';

const defaultDetails={
    id:'',
    name:'',
    imageUrl:'',
    weight:'',
    abilities:''
}
export default function (state=defaultDetails, action) {
    switch (action.type){
        case constants.FETCH_POKEMON_DETAILS:
            const newState={
                id: action.payload.data.id,
                name: action.payload.data.name,
                imageUrl: action.payload.data.sprites.front_default,
                weight: action.payload.data.weight,
                abilities: action.payload.data.abilities
            };
            return newState;
        default:
            return state;
    }
}