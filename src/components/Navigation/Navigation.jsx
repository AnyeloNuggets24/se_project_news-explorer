import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NewsExplorer.svg";
import logoutWhite from "../../assets/logoutwhite.png";

function Navigation({ onSignIn, onLogout, isLoggedIn, currentUser }) {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link">
        <img className="navigation__logo" src={logo} alt="News Explorer logo" />
      </NavLink>
      <div className="nav__container">
        <NavLink to="/" className="navigation__link navigation__link_active">
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved"
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              Saved articles
            </NavLink>

            <button
              className="navigation__account"
              type="button"
              onClick={onLogout}
            >
              <span className="navigation__username">
                {currentUser?.name || "Elise"}
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
