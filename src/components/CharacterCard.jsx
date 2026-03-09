import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const CharacterCard = ({ name, gender, skin_color, eye_color, id }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="card border-danger character-card col-3 mx-3">
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`}
        className="card-img mt-2"
        alt={`No image found for ${name}`}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          <p>Gender: {gender}</p>
          <p>Skin Color: {skin_color}</p>
          <p>Eye Color: {eye_color}</p>
        </p>
        <Link to={`/characters/${id}`}>
        <button className="btn btn-danger me-2">
          Find out more!
        </button>
        </Link>
        <a
          href="#"
          className="btn btn-warning"
          onClick={() =>
            dispatch({
              type: "toggle_favorite",
              payload: { name: name, uid: id, kind: "characters" },
            })
          }
        >
          <i class="fa-solid fa-heart"></i> Favorite
        </a>
      </div>
    </div>
  );
};
