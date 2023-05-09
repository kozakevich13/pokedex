const PokemonDetails = ({ pokemon, onClose }) => (
    <div>
      <h2>{pokemon.name}</h2>
      <button onClick={onClose}>Close</button>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );

  export default PokemonDetails