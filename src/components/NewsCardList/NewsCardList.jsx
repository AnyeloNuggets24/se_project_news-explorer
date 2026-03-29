import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import notFoundImage from "../../assets/not-found.png";

function NewsCardList({ cards, isLoading, hasSearched }) {
  if (isLoading) {
    return <Preloader />;
  }

  if (!cards.length && hasSearched) {
    return (
      <section className="news-card-list news-card-list_empty">
        <img
          className="news-card-list__empty-image"
          src={notFoundImage}
          alt="Nothing found"
        />
        <h2 className="news-card-list__empty-title">Nothing found</h2>
        <p className="news-card-list__empty-text">
          Sorry, but nothing matched your search terms.
        </p>
      </section>
    );
  }

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <div className="news-card-list__grid">
        {cards.map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </div>
      <button className="news-card-list__button" type="button">
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
