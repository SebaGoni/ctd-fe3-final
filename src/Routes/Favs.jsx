import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../utils/global.context";

const Favs = () => {
  const { theme, favorites, clearFavorites } = useContext(ContextGlobal);

  return (
    <div className={`favs ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {Object.keys(favorites).map((dentistId) => (
          <Card
            key={dentistId}
            id={dentistId}
            name={favorites[dentistId].name}
            username={favorites[dentistId].username}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={clearFavorites}
          className="clear-button"
        >
          Borrar Todos
        </button>
      </div>
    </div>
  );
};

export default Favs;



