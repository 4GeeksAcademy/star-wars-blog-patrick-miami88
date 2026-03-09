import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const SpeciesPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const [species, setSpecies] = useState({});

  useEffect(() => {
    const foundSpecies = store?.species.find(
      (species) => species.uid === id,
    );
    if (foundSpecies) {
      setSpecies(foundSpecies.properties);
    }
  }, []);

  return (
    <div className="container text-light">
      <div className="row mt-5">
        <div className="col-3">
          <h1 className="text-light m-3">{species.name}</h1>
          <h4 className="border-bottom border-danger">Classification: </h4>
          <h6>{species.classification}</h6>
          <h4 className="border-bottom border-danger">Language: </h4>
          <h6>{species.language}</h6>
          <h4 className="border-bottom border-danger">Eye Colors: </h4>
          <h6>{species.eye_colors}</h6>
          <h4 className="border-bottom border-danger">Skin Colors: </h4>
          <h6>{species.skin_colors}</h6>
          <h4 className="border-bottom border-danger">Hair Colors: </h4>
          <h6>{species.hair_colors}</h6>
          <h4 className="border-bottom border-danger">Average Lifespan: </h4>
          <h6>{species.average_lifespan}</h6>
          <h4 className="border-bottom border-danger">Average Height: </h4>
          <h6>{species.average_height}</h6>
        </div>
        <div className="col-4"></div>
        <div className="col-5">
          <img
            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/species/${id}.jpg?raw=true`}
            className="rounded mt-2"
            alt={`No image found for ${species.name}`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
      </div>
    </div>
  );
};