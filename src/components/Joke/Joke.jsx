export default function Joke(setup, punchline, type, id) {
  return (
    <article className="joke">
      <p className="joke__setup">{setup}</p>
      <p className="joke__punchline">{punchline}</p>
    </article>
  );
}
