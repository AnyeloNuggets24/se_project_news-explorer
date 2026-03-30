import "./NewsCard.css";

function NewsCard({ card, isLoggedIn, onSaveArticle, saveArticles }) {
  const isSaved = saveArticles.some((item) => item.id === card.id);

  const handleSaveClick = () => {
    if (!isLoggedIn) return;
    onSaveArticle(card);
  };

  return (
    <div className="new-card">
      <div className="new-card__image-wrapper">
        <img className="new-card__image" src={card.image} alt={card.title} />

        <div className="new-card__mark-group">
          {!isLoggedIn && (
            <p className="new-card__mark-text">Sign in to save articles</p>
          )}

          <button
            className={`new-card__mark ${isSaved ? "new-card__mark_saved" : ""}`}
            type="button"
            aria-label="Save article"
            onClick={handleSaveClick}
          />
        </div>
      </div>

      <div className="new-card__content">
        <p className="new-card__date">{card.date}</p>
        <h3 className="new-card__title">{card.title}</h3>
        <p className="new-card__text">{card.description}</p>
        <p className="new-card__source">{card.source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
