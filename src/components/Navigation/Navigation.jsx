import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NewsExplorer.svg";
import logoutWhite from "../../assets/logoutwhite.png";

function Navigation({ onSignIn, onLogout, isLoggedIn, currentUser }) {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo">
        <img
          className="navigation__logo-img"
          src={logo}
          alt="News Explorer logo"
        />
      </NavLink>

      <div className="nav__container">
        <NavLink to="/" activeClassName="navigation__link_active">
          <button className="navigation__link">Home</button>
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/saved" activeClassName="navigation__link_active">
              <button className="navigation__link">Saved articles</button>
            </NavLink>

            <button
              className="navigation__button navigation__button_logged-in"
              type="button"
              onClick={onLogout}
            >
              <span className="navigation__username">
                {currentUser?.name || "Elies"}
              </span>
              <img
                className="navigation__logout-icon"
                src={logoutWhite}
                alt="Log out"
              />
            </button>
          </>
        ) : (
          <button
            className="navigation__button"
            type="button"
            onClick={onSignIn}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
