/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [data, setData] = useState();
  const [fragment, setFragment] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const pokemons = data.results.slice(0, 20);
        const fetchPromises = pokemons.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        return Promise.all(fetchPromises);
      })
      .then((results) => {
        setFragment(results);
        console.log(results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <PokemonContext.Provider value={{ data, fragment }}>
      {children}
    </PokemonContext.Provider>
  );
};
