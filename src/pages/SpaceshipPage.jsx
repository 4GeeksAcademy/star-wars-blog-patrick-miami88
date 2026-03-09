import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const SpaceshipPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const [spaceship, setSpacehship] = useState({});

  useEffect(() => {
    const foundSpaceship = store?.spaceships.find(
      (spaceship) => spaceship.uid === id,
    );
    if (foundSpaceship) {
      setSpacehship(foundSpaceship.properties);
    }
  }, []);

  return (
    <div className="container text-light">
      <div className="row mt-5">
        <div className="col-3">
          <h1 className="text-light m-3">{spaceship.name}</h1>
          <h4 className="border-bottom border-danger">Cargo Capacity: </h4>
          <h6>{spaceship.cargo_capacity}</h6>
          <h4 className="border-bottom border-danger">Passengers: </h4>
          <h6>{spaceship.passengers}</h6>
          <h4 className="border-bottom border-danger">Max Atmosphering Speed: </h4>
          <h6>{spaceship.max_atmosphering_speed}</h6>
          <h4 className="border-bottom border-danger">Crew: </h4>
          <h6>{spaceship.crew}</h6>
          <h4 className="border-bottom border-danger">Length: </h4>
          <h6>{spaceship.length}</h6>
          <h4 className="border-bottom border-danger">Model: </h4>
          <h6>{spaceship.model}</h6>
          <h4 className="border-bottom border-danger">Manufacturer: </h4>
          <h6>{spaceship.manufacturer}</h6>
        </div>
        <div className="col-4"></div>
        <div className="col-5">
          <img
            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${id}.jpg?raw=true`}
            className="rounded mt-2"
            alt={`No image found for ${spaceship.name}`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
      </div>
    </div>
  );
};