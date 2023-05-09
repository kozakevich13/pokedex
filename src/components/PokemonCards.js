import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import PokemonDetails from "./PokemonDetails";

const PokemonCards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=12")
      .then((response) => {
        setPokemonList(response.data.results);
        setNextPageUrl(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLoadMore = () => {
    axios
      .get(nextPageUrl)
      .then((response) => {
        const newPokemonList = response.data.results.map((pokemon) => {
          return {
            ...pokemon,
            type: "type goes here",
          };
        });
        setPokemonList([...pokemonList, ...newPokemonList]);
        setNextPageUrl(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(pokemonList);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon} /> : <> </>}
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <div
            style={{
              width: "20px",
            }}
            key={pokemon.name}
          >
            <Card pokemon={pokemon} onClick={() => handleCardClick(pokemon)} />
          </div>
        ))}
      </div>
      {nextPageUrl && (
        <button className="load-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default PokemonCards;
