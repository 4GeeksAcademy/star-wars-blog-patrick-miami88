import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const PlanetCard = ({ name, climate, terrain, population, id }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="card border-danger character-card col-3 mx-3">
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`}
        className="card-img mt-2"
        alt={`No image found for ${name}`}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          <p>Climate: {climate}</p>
          <p>Terrain: {terrain}</p>
          <p>Population: {population}</p>
        </p>
        <Link to={`/planets/${id}`}>
          <button className="btn btn-danger me-2">Find out more!</button>
        </Link>
        <a
          href="#"
          className="btn btn-warning"
          onClick={() =>
            dispatch({
              type: "toggle_favorite",
              payload: { name: name, uid: id, kind: "planets" },
            })
          }
        >
          <i class="fa-solid fa-heart"></i> Favorite
        </a>
      </div>
    </div>
  );
};
