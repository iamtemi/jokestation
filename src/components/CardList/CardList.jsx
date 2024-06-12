import "./CardList.scss";
import Joke from "../Joke/Joke"

export default function CardList({jokes}) {
  return (
    <section className="jokes">
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </section>
  );
}
