import store from "../store.js"
const { dispatch } = store;

const getPlanets = async () => {
    try {
        const resultFetch = await fetch('https://rickandmortyapi.com/api/location');
        const resultJSON = await resultFetch.json()
        dispatch({type: "GET_PLANETS", deploy: resultJSON.results})
    } catch (error) {
        dispatch({type: "ERROR", deploy: "Error en la petición"})
    }
}
const selectPlanet = (planet, navigate) => {
    navigate('/planet-detail')
    dispatch({type: "RESET_PLANET"})    
    getResidents(planet.residents);
    dispatch({type: "SELECT_PLANET", deploy: {planetSelected: planet}})
}
const getResidents = async (residents) => {
    try {
        const residentsArray = []
        for (const resident of residents) {
            const resultFetch = await fetch(resident);
            const resultJSON = await resultFetch.json()
            residentsArray.push(resultJSON)
        }
        dispatch({type: "GET_RESIDENT", deploy: {residents: residentsArray}})
    } catch (error) {
        dispatch({type: "ERROR", deploy: "Error en ldsda petición"})
    }
}

export { getPlanets, selectPlanet, getResidents }