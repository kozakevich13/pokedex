const Card = ({ pokemon, onClick }) => {
  const { name } = pokemon;

  return (
    <div onClick={onClick}>
      <p style={{ cursor: "pointer" }}>{name}</p>
    </div>
  );
};

export default Card;
