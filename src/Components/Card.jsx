import React, { useContext } from "react";
import { ContextGlobal } from "../utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { favorites, toggleFavorite } = useContext(ContextGlobal);
  const isFavorite = favorites[id];

  const handleClick = () => {
    toggleFavorite({ id, name, username });
    const alertMessage = isFavorite
      ? "Dentista quitado de favoritos"
      : "Dentista agregado a favoritos";
    alert(alertMessage);
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img
          src="../img/doctor.jpg"
          alt={name}
          style={{ width: "200px", height: "auto" }}
        />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button className="favButton" onClick={handleClick}>
        <span className="star" style={{
            color: isFavorite ? "yellow" : "black",
            "-webkit-text-stroke": "1px black",
          }}>&#9733;
        </span>
      </button>
    </div>
  );
};

export default Card;






