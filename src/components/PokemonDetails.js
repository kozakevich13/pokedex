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
        // zIndex: 9999, // set a higher z-index value
      }}
    >
      <h2>{name}</h2>
      {character ? (
        <>
          <img src={character.sprites.front_default} alt={name} />
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>{character.types[0].type.name}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>вага</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                  Type
                </td>
                {/* <td>{character.types[0].type.name}</td> */}
              </tr>
              {/* Add additional rows for other attributes here */}
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
