const PokemonDetails = ({ pokemon, onClose }) => (
    <div style={{
        position: 'fixed',
        top: '50%',
        right: '5%',
        transform: 'translateY(-50%)',
        width: '30%',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        padding: '1rem',
        zIndex: 9999 // set a higher z-index value
      }}>
      <h2>{pokemon.name}</h2>
      <button onClick={onClose}>Close</button>
      {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* <p>Type: {pokemon.types[0].type.name}</p> */}
    </div>
  );

  export default PokemonDetails
  