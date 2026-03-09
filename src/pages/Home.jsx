import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { SpaceshipCard } from "../components/SpaceshipCard.jsx";
import { SpeciesCard } from "../components/SpeciesCard.jsx";
import { useEffect } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const getCharacters = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/people/?expanded=true",
    );
    const data = await response.json();
    console.log(data.results);
    dispatch({ type: "add_characters", payload: data.results });
    return data;
  };

  const getPlanets = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/planets/?expanded=true",
    );
    const data = await response.json();
    console.log(data.results);
    dispatch({ type: "add_planets", payload: data.results });
    return data;
  };

  const getSpaceships = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/starships/?expanded=true",
    );
    const data = await response.json();
    console.log(data.results);
    dispatch({ type: "add_spaceships", payload: data.results });
    return data;
  };

  const getSpecies = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/species/?expanded=true",
    );
    const data = await response.json();
    console.log(data.results);
    dispatch({ type: "add_species", payload: data.results });
    return data;
  };

  useEffect(() => {
    getCharacters();
    getPlanets();
    getSpaceships();
    getSpecies();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex row flex-nowrap overflow-x-scroll mt-5 py-4">
        {store?.characters.map((character) => (
          <CharacterCard
            name={character.properties.name}
            gender={character.properties.gender}
            skin_color={character.properties.skin_color}
            eye_color={character.properties.eye_color}
            id={character.uid}
            key={character._id}
          />
        ))}
      </div>
      <div className="d-flex row flex-nowrap overflow-x-scroll mt-5 py-4">
        {store?.planets.map((planet) => (
          <PlanetCard
            name={planet.properties.name}
            climate={planet.properties.climate}
            terrain={planet.properties.terrain}
            population={planet.properties.population}
            id={planet.uid}
            key={planet._id}
          />
        ))}
      </div>
      <div className="d-flex row flex-nowrap overflow-x-scroll mt-5 py-4">
        {store?.spaceships.map((spaceship) => (
          <SpaceshipCard
            name={spaceship.properties.name}
            cargo_capacity={spaceship.properties.cargo_capacity}
            passengers={spaceship.properties.passengers}
            ship_length={spaceship.properties.ship_length}
            id={spaceship.uid}
            key={spaceship._id}
          />
        ))}
      </div>
      <div className="d-flex row flex-nowrap overflow-x-scroll mt-5 py-4">
        {store?.species.map((species) => (
          <SpeciesCard
            name={species.properties.name}
            designation={species.properties.designation}
            skin_colors={species.properties.skin_colors}
            language={species.properties.language}
            id={species.uid}
            key={species._id}
          />
        ))}
      </div>
    </div>
  );
};
