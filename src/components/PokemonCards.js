import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import PokemonDetails from "./PokemonDetails";

const PokemonCards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [typesList, setTypesList] = useState([]);

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

    axios
      .get("https://pokeapi.co/api/v2/type?limit=999")
      .then((response) => {
        setTypesList(response.data.results);
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

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleTypeFilter = (event) => {
    const type = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then((response) => {
        const newPokemonList = response.data.pokemon.map((p) => p.pokemon);
        setPokemonList(newPokemonList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="header-container">Pokedex</h1>
      {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon} /> : <> </>}
      <div>
        <select onChange={handleTypeFilter}>
          <option value="">Filter by type</option>
          {typesList.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
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
