import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { charactersReducer } from "./characters/characters.reducer";
import { planetsReducer } from "./planets/planets.reducer";


const mainReducer = combineReducers({
    characters: charactersReducer,
    planets: planetsReducer
});

const pepe = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default pepe;