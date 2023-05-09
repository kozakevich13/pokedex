import { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetails = ({ pokemon }) => {
  const { name } = pokemon;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  console.log(character);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "5%",
        transform: "translateY(-50%)",
        width: "20%",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        padding: "1rem",
      }}
    >
      {character ? (
        <>
          <img src={character.sprites.front_default} alt={name} />
          <h2>{name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>{character.types[0].type.name}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{character.stats[1].base_stat}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{character.stats[2].base_stat}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{character.stats[0].base_stat}</td>
              </tr>
              <tr>
                <td>SP Attack</td>
                <td>{character.stats[3].base_stat}</td>
              </tr>
              <tr>
                <td>SP Defense</td>
                <td>{character.stats[4].base_stat}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{character.stats[5].base_stat}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{character.weight}</td>
              </tr>
              <tr>
                <td>Total moves</td>
                <td>{character.moves.length}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetails;
