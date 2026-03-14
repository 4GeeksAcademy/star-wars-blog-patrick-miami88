import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <li className="nav-item dropdown btn btn-success">
          <a
            className="nav-link dropdown-toggle text-light"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </a>
          <ul className="dropdown-menu bg bg-dark">
            {store.favorites.characters.map((character) => (
              <li key={character.uid}>
                <Link to={`/characters/${character.uid}`}>
                  <span>{character.name}</span>
                </Link>
                <span
                  className="text-danger"
                  onClick={() =>
                    dispatch({
                      type: "toggle_favorite",
                      payload: {
                        name: character.name,
                        uid: character.uid,
                        kind: "characters"
                      },
                    })
                  }
                ><p><i class="fa-solid fa-trash"></i></p></span>
              </li>
            ))}
            {store.favorites.planets.map((planet) => (
              <li key={planet.uid}>
                <Link to={`/planets/${planet.uid}`}>
                  <span>{planet.name}</span>
                </Link>
                <span
                  className="text-danger"
                  onClick={() =>
                    dispatch({
                      type: "toggle_favorite",
                      payload: {
                        name: planet.name,
                        uid: planet.uid,
                        kind: "planets"
                      },
                    })
                  }
                ><p><i class="fa-solid fa-trash"></i></p></span>
              </li>
            ))}
            {store.favorites.spaceships.map((spaceship) => (
              <li key={spaceship.uid}>
                <Link to={`/spaceships/${spaceship.uid}`}>
                  <span>{spaceship.name}</span>
                </Link>
                <span
                  className="text-danger"
                  onClick={() =>
                    dispatch({
                      type: "toggle_favorite",
                      payload: {
                        name: spaceship.name,
                        uid: spaceship.uid,
                        kind: "spaceships"
                      },
                    })
                  }
                ><p><i class="fa-solid fa-trash"></i></p></span>
              </li>
            ))}
            {store.favorites.species.map((species) => (
              <li key={species.uid}>
                <Link to={`/species/${species.uid}`}>
                  <span>{species.name}</span>
                </Link>
                <span
                  className="text-danger"
                  onClick={() =>
                    dispatch({
                      type: "toggle_favorite",
                      payload: {
                        name: species.name,
                        uid: species.uid,
                        kind: "species"
                      },
                    })
                  }
                ><p><i class="fa-solid fa-trash"></i></p></span>
              </li>
            ))}
          </ul>
        </li>
      </div>
    </nav>
  );
};
