import { requestAxiosPokemon } from '../axios/pokemon';
import * as type from '../constans/pokemon';
import axios from 'axios';

//login
export function requestPokemon () {
    return async (dispatch) => {
        const { results } = await requestAxiosPokemon()
        const getDetailsPokemons = await Promise.all(results.map(async item => {
            const { data } = await axios.get(item.url)
            return {
                ...item,
                image: data.sprites.front_default,
                details: {
                    ...data,
                }
            }
        }))
        console.log('results >>> ',results )
        dispatch({
            type: type.REQUEST_POKEMON,
            pokemonList: getDetailsPokemons
        })
    }
}