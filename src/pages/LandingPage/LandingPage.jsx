import { useState } from "react";
import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/${e.target.category.value}`);
  }
  return (
    <section className="landing">
      <h1 className="landing__title">Joke Station</h1>
      <p className="landing_instructions">
        Select a category or jump right in!
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
