import { typesPokemones } from "../types/types";

const initialState = {
    pokemones: []
}

export const pokemoneReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPokemones.add:
            return {
                pokemones: [action.payload]
            }
            case typesPokemones.addFormik: 
            return { 
                pokemones: [action.payload]
            }
        case typesPokemones.list:
            return {
                pokemones: [...action.payload]
            }

        case typesPokemones.edit:
            return {
                ...state
            }

        case typesPokemones.delete:
            return {
                pokemones: state.pokemones.filter(p => p.codigo !== action.payload)
            }
        default:
            return state
    }

}