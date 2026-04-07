import "./NewsCardList.css";
import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import notFoundImage from "../../assets/not-found.png";

const MOBILE_BREAKPOINT = 630;
const MOBILE_INITIAL_CARDS = 3;
const DESKTOP_INITIAL_CARDS = 6;
const CARDS_INCREMENT = 6;

const getInitialCardsCount = () => {
  if (typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT) {
    return MOBILE_INITIAL_CARDS;
  }

  return DESKTOP_INITIAL_CARDS;
};

function NewsCardList({
  cards,
  isLoading,
  hasSearched,
  isLoggedIn,
  onSaveArticle,
  saveArticles,
  isSavedPage = false,
}) {
  const [visibleCardsCount, setVisibleCardsCount] = useState(
    isSavedPage ? cards.length : getInitialCardsCount(),
  );

  useEffect(() => {
    setVisibleCardsCount(isSavedPage ? cards.length : getInitialCardsCount());
  }, [cards, isSavedPage]);

  useEffect(() => {
    if (isSavedPage || typeof window === "undefined") {
      return undefined;
    }

    const handleResize = () => {
      setVisibleCardsCount((currentCount) => {
        const nextMinimum = getInitialCardsCount();
        return currentCount < nextMinimum ? nextMinimum : currentCount;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isSavedPage]);

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

  if (!cards.length && !hasSearched) {
    return null;
  }

  const visibleCards = isSavedPage ? cards : cards.slice(0, visibleCardsCount);
  const canShowMore = !isSavedPage && cards.length > visibleCardsCount;

  const handleShowMore = () => {
    setVisibleCardsCount((prevCount) => prevCount + CARDS_INCREMENT);
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <div className="news-card-list__grid">
        {visibleCards.map((card) => (
          <NewsCard
            key={card.id}
            card={card}
            isLoggedIn={isLoggedIn}
            onSaveArticle={onSaveArticle}
            saveArticles={saveArticles}
            isSavedPage={isSavedPage}
          />
        ))}
      </div>
      {canShowMore && (
        <button
          className="news-card-list__button"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
