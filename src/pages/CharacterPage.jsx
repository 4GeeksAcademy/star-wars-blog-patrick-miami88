import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CharacterCard } from "../components/CharacterCard";

export const CharacterPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const foundCharacter = store?.characters.find(
      (character) => character.uid === id,
    );
    if (foundCharacter) {
      setCharacter(foundCharacter.properties);
    }
  }, []);

  return (
    <div className="container text-light">
      <div className="row mt-5">
        <div className="col-3">
          <h1 className="text-light m-3">{character.name}</h1>
          <h4 className="border-bottom border-danger">Gender: </h4>
          <h6>{character.gender}</h6>
          <h4 className="border-bottom border-danger">Skin Color: </h4>
          <h6>{character.skin_color}</h6>
          <h4 className="border-bottom border-danger">Hair Color: </h4>
          <h6>{character.hair_color}</h6>
          <h4 className="border-bottom border-danger">Height: </h4>
          <h6>{character.height}</h6>
          <h4 className="border-bottom border-danger">Eye Color: </h4>
          <h6>{character.eye_color}</h6>
          <h4 className="border-bottom border-danger">Mass: </h4>
          <h6>{character.mass}</h6>
          <h4 className="border-bottom border-danger">Birth Year: </h4>
          <h6>{character.birth_year}</h6>
        </div>
        <div className="col-4"></div>
        <div className="col-5">
          <img
            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`}
            className="rounded mt-2"
            alt={`No image found for ${character.name}`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
      </div>
    </div>
  );
};
