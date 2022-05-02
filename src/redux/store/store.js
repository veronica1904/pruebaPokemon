import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";


// Local Storage
import { guardarLocalStorage, obtenerLocalStorage } from "../../utils/LocalStorage";
import reducerPokemon from "../reducers/pokemon";
import { pokemoneReducers } from "../reducers/pokemonReducers";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = obtenerLocalStorage();

const reducersEnviar = combineReducers({
    login: loginReducer,
    register: registerReducer,
    pokemonData: reducerPokemon,
    pokemones: pokemoneReducers
})

export const store = createStore(
    reducersEnviar,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    guardarLocalStorage(
        {
           modal: store.getState().modal
        }
   )
})
