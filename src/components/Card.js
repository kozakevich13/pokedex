import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ pokemon, onClick }) => {
  const { name, url } = pokemon;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokemonDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt={name} />
      </div>
      <div className="card-content">
        <p className="card-name">{name}</p>
        {pokemonDetails && (
          <p className="card-type">
            Type:{" "}
            {pokemonDetails.types.map((type) => type.type.name).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
