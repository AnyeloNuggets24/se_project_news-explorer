import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-form">
      <div className="search-form__nav">
        <h2 className="search-form__title">What's going on in the world?</h2>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter topic"
          value={query}
          onChange={handleChange}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
