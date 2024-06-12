import { useState } from "react";
import "./Joke.scss";

export default function Joke({ joke }) {
  const [jokeSide, setJokeSide] = useState(false);
  const [jokeSaved, setJokeSaved] = useState(false);

  const handleClick = () => {
    setJokeSide(!jokeSide);
  };

  const saveJoke = async () => {
    try {
      const response = await axios.post(`https://localhost:${PORT}`, {
        setup: joke.setup,
        delivery: joke.delivery,
        category: joke.category,
      });
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
