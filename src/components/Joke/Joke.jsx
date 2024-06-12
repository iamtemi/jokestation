export default function Joke({ joke }) {
  return (
    <article className="joke">
      <p className="joke__setup">{joke.setup}</p>
      <p className="joke__delivery">{joke.delivery}</p>
      <p className="joke__category">{joke.category}</p>
    </article>
  );
}
