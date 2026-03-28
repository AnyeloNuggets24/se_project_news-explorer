import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onSearch, onSgnIn, isLoggedIn, currentUser }) {
  return (
    <header className="header">
      <Navigation
        onSgnIn={onSgnIn}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}

      />
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
