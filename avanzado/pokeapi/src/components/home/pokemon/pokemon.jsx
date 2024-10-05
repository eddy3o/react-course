/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Pokemon.module.css";
import { PokemonContext } from "../../../context/PokemonContext";

const PokemonContainer = () => {
  const { fragment } = useContext(PokemonContext);

  return (
    <section className={styles.cards}>
      <PokemonItems fragment={fragment} />
    </section>
  );
};

const PokemonItems = ({ fragment }) => {
  return (
    <>
      {fragment?.map((item) => (
        <article key={item.id} className={styles.card}>
          <img
            className={styles.image}
            src={item.sprites.other["official-artwork"].front_default}
            alt={item.name}
          />
          <div>
            <span>{"#" + String(item.id).padStart(4, "0")}</span>
            <br />
            <span className={styles.names}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </span>
          </div>
        </article>
      ))}
    </>
  );
};

export default PokemonContainer;
