import styles from "./Home.module.css";

import { useContext } from "react";

import { GameContext } from "../../context/GameContext";

import { Link } from "react-router-dom";

import { uploads } from "../../utils/config";

const Home = () => {
  const { games, loading } = useContext(GameContext);

  if (loading) {
    return <div className={styles.c_loader}></div>
  }

  return (
    <main>
      <h1 className={styles.center}>
        Os melhores jogos e os mais jogados do momento!!!
      </h1>

      <div className={styles.game_container}>
        {games.map((game, key) => {
          return (
            <div className={styles.game_card} key={key}>
              <div className={styles.game_card_img}>
                <img
                  src={`${uploads}/imagens/games/${game.image}`}
                  alt={game.title}
                  className={styles.card_img}
                />
              </div>
              <div className={styles.card_body}>
                <h1 className={styles.title}>{game.title}</h1>
                <div className={styles.card_footer}>
                  <Link to={`/${game.id}`} className={styles.button}>
                    {" "}
                    Saiba mais{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
