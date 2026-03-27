import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NewsExplorer.svg";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <NavLink to="/" className="navigation__link">
          <img
            className="navigation__logo"
            src={logo}
            alt="News Explorer logo"
          />
        </NavLink>
        <div className="nav__container">
          <NavLink to="/" className="navigation__link navigation__link_active">
            Home
          </NavLink>
          <button className="navigation__button">Sign in</button>
          {/* <a href="/saved" className="navigation__link">
          Saved articles
        </a>
        <div className="navigation__user">
          <span className="navigation__username">Elise</span>
          <img className="navigation__union" src={union} alt="user icon" />
        </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
