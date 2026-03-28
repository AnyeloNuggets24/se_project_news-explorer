import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NewsExplorer.svg";

function Navigation({ onSgnIn, isLoggedIn, currentUser }) {
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

            <div className="navigation__user">
              <span className="navigation__username">
                {currentUser?.name || "User"}
              </span>
              <button className="navigation__logout">Logout</button>
            </div>
          </>
        ) : (
          <button
            className="navigation__button"
            type="button"
            onClick={onSgnIn}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
