import React, { useEffect } from "react";
import "./Characters.css";
import {
  deleteCharacter,
  filterByStatus,
  getCharacters,
  selectCharacter,
} from "../../redux/characters/characters.actions";
import { useSelector } from "react-redux";

const Characters = () => {
  useEffect(() => {
    getCharacters();
  }, []);

  const { characters, charactersFiltered, characterSelected } = useSelector(
    (state) => state.characters
  );

  return (
    <>
      <div className="botones">
        <button
          className="boton-filtrado"
          onClick={() => filterByStatus(characters, "Dead")}
        >
          Dead
        </button>
        <button
          className="boton-filtrado"
          onClick={() => filterByStatus(characters, "Alive")}
        >
          Alive
        </button>
        <button
          className="boton-filtrado"
          onClick={() => filterByStatus(characters)}
        >
          Todos
        </button>
      </div>
      <div className="characters">
        {charactersFiltered.map((character) => {
          return (
            <div
              className="character"
              key={character.id}
            >
              <img
                className="basura"
                src="/assets/basura.png"
                onClick={() => deleteCharacter(characters, character, characterSelected)}
              />
              <h3 onClick={() => selectCharacter(character)}>{character.name}</h3>
              <img src={character.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
