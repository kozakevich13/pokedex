const Card = ({ pokemon, onClick }) => (
    <div onClick={onClick}>
      <p>{pokemon.name}</p>
    </div>
  );

  export default Card