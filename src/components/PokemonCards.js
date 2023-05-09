import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import PokemonDetails from './PokemonDetails'

const PokemonCards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [test, setTest] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/4/')
      .then(response => {
        setTest(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  console.log(test)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=12')
      .then(response => {
        setPokemonList(response.data.results);
        setNextPageUrl(response.data.next);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleLoadMore = () => {
    axios.get(nextPageUrl)
      .then(response => {
        setPokemonList([...pokemonList, ...response.data.results]);
        setNextPageUrl(response.data.next);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleDetailsClose = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      {selectedPokemon ? (
        <PokemonDetails pokemon={selectedPokemon} onClose={handleDetailsClose} />
      ) : (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {pokemonList.map(pokemon => (
              <div key={pokemon.name} style={{ width: '33.33%', padding: '10px' }}>
                <Card pokemon={pokemon} onClick={() => handleCardClick(pokemon)} />
              </div>
            ))}
          </div>
          {nextPageUrl && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </>
      )}
    </div>
  );
};

export default PokemonCards;
