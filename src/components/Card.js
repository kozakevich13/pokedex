const Card = ({ pokemon, onClick }) => {
  const { name } = pokemon;

  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt={name} />
      </div>
      <div className="card-content">
        <p className="card-name">{name}</p>
      </div>
    </div>
  );
};

export default Card;
