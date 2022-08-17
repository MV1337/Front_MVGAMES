import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GameContext = createContext();

//provider
export const GameContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api-mv-games.herokuapp.com/api/games")
      .then((response) => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Algo deu errado!");
      });
  }, []);

  return (
    <GameContext.Provider value={{ games, loading }}>
      {children}
    </GameContext.Provider>
  );
};


