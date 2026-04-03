import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoLight from "../../assets/NewsExplorer.svg";
import logoDark from "../../assets/logo-dark.svg";
import logoutWhite from "../../assets/logoutwhite.png";
import logoutBlack from "../../assets/logoutblack.png";
import closeIcon from "../../assets/close.svg";
import menuLight from "../../assets/Menu/MenuWhite.svg";
import menuDark from "../../assets/Menu/Menu.Black.svg";

function Navigation({
  onSignIn,
  onLogout,
  isLoggedIn,
  currentUser,
  theme = "light",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkTheme = theme === "dark";

  const logoSrc = isDarkTheme ? logoDark : logoLight;
  const logoutIconSrc = isDarkTheme ? logoutBlack : logoutWhite;
  const menuIconSrc = isDarkTheme ? menuDark : menuLight;

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuButtonClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 630) {
      setIsMenuOpen(true);
      return;
    }

    onSignIn?.();
  };

  const handleSignInClick = () => {
    closeMenu();
    onSignIn?.();
  };

  const handleLogoutClick = () => {
    closeMenu();
    onLogout?.();
  };

  return (
    <nav className={`navigation ${isDarkTheme ? "navigation_theme_dark" : ""}`}>
      <NavLink to="/" className="navigation__logo">
        <img
          className="navigation__logo-img"
          src={logoSrc}
          alt="News Explorer logo"
        />
      </NavLink>

      <div
        className={`nav__container ${!isLoggedIn ? "nav__container_signed-out" : ""}`}
      >
        <NavLink
          exact
          to="/"
          className="navigation__nav-link"
          activeClassName="navigation__home-link_active"
        >
          <button className="navigation__link">Home</button>
        </NavLink>

        {isLoggedIn ? (
          <>
            <div className="navigation__logged-in-controls">
              <NavLink
                to="/saved"
                className="navigation__nav-link"
                activeClassName="navigation__saved-link_active"
              >
                <button className="navigation__link">Saved articles</button>
              </NavLink>

              <button
                className="navigation__button navigation__button_logged-in"
                type="button"
                onClick={handleLogoutClick}
              >
                <span className="navigation__username">
                  {currentUser?.name || "Elies"}
                </span>
                <img
                  className="navigation__logout-icon"
                  src={logoutIconSrc}
                  alt="Log out"
                />
              </button>
            </div>

            <button
              className="navigation__button navigation__menu-button navigation__menu-button_saved"
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <img
                className="navigation__menu-icon"
                src={menuIconSrc}
                alt="Menu"
              />
            </button>
          </>
        ) : (
          <button
            className="navigation__button navigation__menu-button"
            type="button"
            onClick={handleMenuButtonClick}
            aria-label="Open menu"
          >
            <span className="navigation__menu-label">Sign in</span>
            <img
              className="navigation__menu-icon"
              src={menuIconSrc}
              alt="Menu"
            />
          </button>
        )}
      </div>

      {isMenuOpen && (
        <div className="navigation__mobile-menu">
          <div className="navigation__mobile-menu-header">
            <NavLink to="/" className="navigation__logo" onClick={closeMenu}>
              <img
                className="navigation__logo-img"
                src={logoLight}
                alt="News Explorer logo"
              />
            </NavLink>

            <button
              className="navigation__mobile-close"
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <img
                className="navigation__mobile-close-icon"
                src={closeIcon}
                alt="Close menu"
              />
            </button>
          </div>

          <div className="navigation__mobile-menu-content">
            <NavLink
              exact
              to="/"
              className="navigation__mobile-link"
              activeClassName="navigation__mobile-link_active"
              onClick={closeMenu}
            >
              Home
            </NavLink>

            {isLoggedIn && (
              <NavLink
                to="/saved"
                className="navigation__mobile-link"
                activeClassName="navigation__mobile-link_active"
                onClick={closeMenu}
              >
                Saved articles
              </NavLink>
            )}

            {isLoggedIn ? (
              <button
                className="navigation__button navigation__button_logged-in navigation__mobile-auth-button"
                type="button"
                onClick={handleLogoutClick}
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
            ) : (
              <button
                className="navigation__button navigation__mobile-auth-button"
                type="button"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
