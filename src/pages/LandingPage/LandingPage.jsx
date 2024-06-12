import { useState } from "react";
import "./LandingPage.scss";

export default function LandingPage() {
  //const [category, setCategory] = useState("Any");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.category.value);
  }
  return (
    <section className="landing">
      <h1 className="landing__title">Joke Station</h1>
      <p className="landing_instructions">
        Select a catagory or jump right in!
      </p>
      <form className="landing_category" onSubmit={handleSubmit}>
        {/* Any, Misc, Programming, Dark, Pun, Spooky, Christmas */}
        <select name="category" className="landing__select" id="category">
          <option className="landing__option" value="Any">
            Any
          </option>
          <option className="landing__option" value="Misc">
            Misc
          </option>
          <option className="landing__option" value="Programming">
            Programming
          </option>
          <option className="landing__option" value="Dark">
            Dark
          </option>
          <option className="landing__option" value="Spooky">
            Spooky
          </option>
          <option className="landing__option" value="Christmas">
            Christmas
          </option>
        </select>
        <button className="landing__button">Get Jokes</button>
      </form>
    </section>
  );
}
