const INITIAL_STATE = {
    planets: [],
    error: null,
    planetsFiltered: [],
    planetSelected: null,
    residents: [],
    residentsFiltered: []
}

export const planetsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PLANETS":
            return {
                    ...state,
                    planets: [...action.deploy]
            }
        case "SELECT_PLANET":
            return {...state, planetSelected: {...action.deploy.planetSelected}}
        case "GET_RESIDENT":
            return {...state, residents: [...action.deploy.residents]}
        case "RESET_PLANET":
            return {...state, planetSelected: [], residents: [], residentsFiltered: []}
        case "ERROR":
            return {...state, error: action.deploy}
        default:
            return state;
    }
}