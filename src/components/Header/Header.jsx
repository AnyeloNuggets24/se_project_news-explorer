import "./Header.css";
import logo from "../../assets/logo-dark.svg";
import union from "../../assets/Union.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="News Explorer logo" />
      <nav className="header__nav">
        <a href="/" className="header__link">
          Home
        </a>
        <a href="/saved" className="header__link">
          Saved articles
        </a>
        <div className="header__user">
          <span className="header__username">Elise</span>
          <img className="header__union" src={union} alt="user icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
