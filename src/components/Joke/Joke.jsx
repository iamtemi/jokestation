import { useState } from "react";
import "./Joke.scss";
import axios from "axios";

export default function Joke({ joke }) {
  const [jokeSide, setJokeSide] = useState(false);
  const [jokeSaved, setJokeSaved] = useState(false);

  const handleClick = () => {
    setJokeSide(!jokeSide);
  };

  const PORT = import.meta.env.VITE_PORT;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // console.log();

  const saveJoke = async () => {
    const newJoke = {
      setup: joke.setup,
      delivery: joke.delivery,
      category: joke.category,
    };

    try {
      const response = await axios.post(
        `http://${BASE_URL}:${PORT}/saved`,
        newJoke
      );
      setJokeSaved(true);
    } catch (error) {
      console.error("Error saving joke:", error);
    }
  };

  return (
    <article className="joke" onClick={handleClick}>
      {!jokeSide && <p className="joke__setup">{joke.setup}</p>}
      {jokeSide && <p className="joke__delivery">{joke.delivery}</p>}
      <div className="joke__div">
        <p className="joke__save" onClick={saveJoke}>
          {!jokeSaved ? "Save ♥️" : "Saved 👍"}
        </p>
        <p className="joke__category">Category: {joke.category}</p>
      </div>
    </article>
  );
}
