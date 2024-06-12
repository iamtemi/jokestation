import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__img" src={logo} alt="" />
        JokeStation
      </Link>
      <nav className="header__nav">
        <ul className="nav__list">
          <Link className="header__link" to="/">
            <li className="nav__item">Filter</li>
          </Link>
          <Link className="header__link" to="/saved-jokes">
            <li className="nav__item">Saved</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
