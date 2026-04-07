import "./NewsCard.css";

function NewsCard({
  card,
  isLoggedIn,
  onSaveArticle = () => {},
  saveArticles = [],
  isSavedPage = false,
}) {
  const cardKey = card.url || card.id;
  const isSaved = saveArticles.some(
    (item) => (item.url || item.id) === cardKey,
  );

  const markHintText = isSavedPage
    ? "Remove from saved"
    : !isLoggedIn
      ? "Sign in to save articles"
      : "";

  const markClassName = isSavedPage
    ? "new-card__mark new-card__mark_delete"
    : `new-card__mark ${isSaved ? "new-card__mark_saved" : ""}`;

  const handleSaveClick = () => {
    if (!isLoggedIn) return;
    onSaveArticle(card);
  };

  return (
    <div className="new-card">
      <div className="new-card__image-wrapper">
        <img className="new-card__image" src={card.image} alt={card.title} />

        {isSavedPage ? (
          <p className="new-card__keyword">{card.keyword || "General"}</p>
        ) : null}

        <div className="new-card__mark-group">
          {markHintText ? (
            <p className="new-card__mark-text">{markHintText}</p>
          ) : null}

          <button
            className={markClassName}
            type="button"
            aria-label={isSavedPage ? "Remove article" : "Save article"}
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
