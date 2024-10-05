import searchIcon from "./../../../assets/search.svg";
import styles from "./Header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.container}>
      <section className={styles.section}>
        <div>
          <span className={styles.first}>Name or number</span>
          <br />
          <div className={styles.search}>
            <input type="text" />
            <button>
              <img src={searchIcon} alt="searchIcon" />
            </button>
          </div>
          <span>
            Use the Advance Search to explore Pokemon by type, weakness,
            Ability, and more!
          </span>
        </div>
        <div className={styles.second}>
          <div className={styles.text}>
            <span>
              Search for a Pokemon by name or using its National Pokedex number.
            </span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AppHeader;
