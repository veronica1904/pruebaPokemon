import * as type from '../constans/pokemon';
import { initialState } from '../states/pokemon';

export default  function reducerPokemon(state = initialState, action) {
    switch (action.type) {
        case type.REQUEST_POKEMON:
            return {
                ...state,
                loading: false,
                error: false,
                pokemonList: action.pokemonList
            }
    
            default:
                return state;
    }
    
}