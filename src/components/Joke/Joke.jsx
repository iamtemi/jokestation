import { useState } from "react";
import "./Joke.scss";

export default function Joke({ joke }) {
  const [jokeSide, setJokeSide] = useState(false);

  const handleClick = () => {
    setJokeSide(!jokeSide);
  };

  return (
    <article className="joke" onClick={handleClick}>
      {!jokeSide && <p className="joke__setup">{joke.setup}</p>}
      {jokeSide && <p className="joke__delivery">{joke.delivery}</p>}
      <p className="joke__category">{joke.category}</p>
    </article>
  );
}
