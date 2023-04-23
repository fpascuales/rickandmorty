const INITIAL_STATE = {
  characters: [],
  loading: false,
  error: null,
  charactersFiltered: [],
  characterSelected: null,
};

export const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_CHARACTERS":
      return {
        ...state,
        loading: false,
        characters: [...action.contenido],
        charactersFiltered: [...action.contenido],
      };
    case "ERROR":
      return { ...state, loading: false, error: action.contenido };
    case "SELECT_CHARACTER":
      return { ...state, characterSelected: { ...action.contenido } };
    case "FILTER":
      return { ...state, charactersFiltered: [...action.contenido] };
    case "DELETE":
      return {
        ...state,
        characters: [...action.contenido.nuevosCharacters],
        charactersFiltered: [...action.contenido.nuevosCharacters],
        characterSelected: action.contenido.seleccionado,
      };
    default:
      return state;
  }
};

/* if (action.type === "LOADING") {
    return { ...state, loading: true };
  } else if (action.type === "GET_CHARACTERS") {
    return {
      ...state,
      loading: false,
      characters: [...action.contenido],
      charactersFiltered: [...action.contenido],
    };
  } else if (action.type === "ERROR") {
    return { ...state, loading: false, error: action.contenido };
  } else if (action.type === "SELECT_CHARACTER") {
    return { ...state, characterSelected: { ...action.contenido } };
  } else if (action.type === "FILTER") {
    return { ...state, charactersFiltered: [...action.contenido] };
  } else if (action.type === "DELETE") {
    return {
      ...state,
      characters: [...action.contenido.nuevosCharacters],
      charactersFiltered: [...action.contenido.nuevosCharacters],
      characterSelected: action.contenido.seleccionado,
    };
  } else {
    return state;
  } */
