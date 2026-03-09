import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const PlanetPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const foundPlanet = store?.planets.find(
      (planet) => planet.uid === id,
    );
    if (foundPlanet) {
      setPlanet(foundPlanet.properties);
    }
  }, []);

  return (
    <div className="container text-light">
      <div className="row mt-5">
        <div className="col-3">
          <h1 className="text-light m-3">{planet.name}</h1>
          <h4 className="border-bottom border-danger">Surface Water: </h4>
          <h6>{planet.surface_water}</h6>
          <h4 className="border-bottom border-danger">Climate: </h4>
          <h6>{planet.climate}</h6>
          <h4 className="border-bottom border-danger">Diameter: </h4>
          <h6>{planet.diameter}</h6>
          <h4 className="border-bottom border-danger">Rotation Period: </h4>
          <h6>{planet.rotation_period}</h6>
          <h4 className="border-bottom border-danger">Terrain: </h4>
          <h6>{planet.terrain}</h6>
          <h4 className="border-bottom border-danger">Orbital Period: </h4>
          <h6>{planet.orbital_period}</h6>
          <h4 className="border-bottom border-danger">Population: </h4>
          <h6>{planet.population}</h6>
        </div>
        <div className="col-4"></div>
        <div className="col-5">
          <img
            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`}
            className="rounded mt-2"
            alt={`No image found for ${planet.name}`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
      </div>
    </div>
  );
};
