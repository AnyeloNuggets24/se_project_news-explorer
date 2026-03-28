import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onSearch, onSignIn, onLogout, isLoggedIn, currentUser }) {
  return (
    <header className="header">
      <Navigation
        onSignIn={onSignIn}
        onLogout={onLogout}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
