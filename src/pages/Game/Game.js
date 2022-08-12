import style from "./Game.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Game = () => {
  const { id } = useParams();

  const [game, setGame] = useState([]);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://api-mv-games.herokuapp.com/api/games/${id}`)
      .then((response) => {
        setGame(response.data);
        setLoading(false)
      })
      .catch(() => {
        console.log("Ocorreu algum erro");
      });
  }, [id]);

  if(loading) {
    return <div className={style.c_loader}></div>
      
    
  }

  return (
    <div className={style.game_container}>
      <h1>Conheça um pouco mais sobre o jogo {game.title}</h1>
      <p>Gênero: {game.genre}</p>
      <p>{game.details}</p>
      <p>Veja o trailer do jogo logo abaixo.</p>
      <div className={style.video}>
        <iframe src={game.url} title={game.title} allowfullscreen></iframe>
      </div>
      <p>O jogo foi lançado em {game.year}.</p>
    </div>
  );
};

export default Game;
