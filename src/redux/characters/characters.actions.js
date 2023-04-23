import store from "../store.js";

const { dispatch } = store;

const getCharacters = async () => {
  dispatch({ type: "LOADING" });

  try {
    const result = await fetch("https://rickandmortyapi.com/api/character");
    const res = await result.json();
    dispatch({ type: "GET_CHARACTERS", contenido: res.results });
  } catch (error) {
    dispatch({ type: "ERROR", contenido: "error haciendo la petición" });
  }

  /* fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((res) =>
      dispatch({ type: "GET_CHARACTERS", contenido: res.results })
    ); */
};

const selectCharacter = (character) => {
  dispatch({ type: "SELECT_CHARACTER", contenido: character });
};

const filterByStatus = (characters, status) => {
  let filtered;

  if (status) {
    filtered = characters.filter((character) => character.status === status);
  } else {
    filtered = [...characters];
  }

  dispatch({ type: "FILTER", contenido: filtered });
};

const deleteCharacter = (characters, characterToDelete, characterSelected) => {
  const nuevosCharacters = characters.filter(
    (character) => character !== characterToDelete
  );
  if (characterSelected.name === characterToDelete.name) {
    dispatch({
      type: "DELETE",
      contenido: { nuevosCharacters: nuevosCharacters, seleccionado: null },
    });
  } else {
    dispatch({
      type: "DELETE",
      contenido: {
        nuevosCharacters: nuevosCharacters,
        seleccionado: characterSelected,
      },
    });
  }
};

export { getCharacters, selectCharacter, filterByStatus, deleteCharacter };