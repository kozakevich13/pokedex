import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ pokemon, onClick }) => {
  const { name, url } = pokemon;
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [pokemonType, setPokemonType] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokemonDetails(response.data);
        setPokemonType(response.data.types[0].type.name);
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
          <div className="type-container">
            {pokemonDetails.types.map((type) => (
              <div
                className={`pokemon-type card-${
                  type.type.name === "grass"
                    ? "grass"
                    : type.type.name === "poison"
                    ? "poison"
                    : type.type.name === "fire"
                    ? "fire"
                    : type.type.name === "water"
                    ? "water"
                    : type.type.name === "flying"
                    ? "water"
                    : type.type.name === "bug"
                    ? "bug"
                    : type.type.name === "normal"
                    ? "normal"
                    : type.type.name === "electric"
                    ? "electric"
                    : type.type.name === "ground"
                    ? "ground"
                    : type.type.name === "fairy"
                    ? "fairy"
                    : ""
                }`}
                key={type.id}
              >
                {type.type.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
