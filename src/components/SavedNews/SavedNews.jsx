import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function SavedNews({
  savedArticles,
  isLoggedIn,
  currentUser,
  onSignIn,
  onLogout,
  onSaveArticle,
}) {
  const userName = currentUser?.name || "Elies";
  const articlesCount = savedArticles.length;
  const articleWord = articlesCount === 1 ? "article" : "articles";

  const keywords = [
    ...new Set(
      savedArticles
        .map((article) => article.keyword || article.title)
        .filter(Boolean),
    ),
  ];

  const getKeywordsText = () => {
    if (!keywords.length) {
      return "No saved keywords yet";
    }

    if (keywords.length === 1) {
      return keywords[0];
    }

    const othersCount = keywords.length - 1;
    return `${keywords[0]} and ${othersCount} other${othersCount > 1 ? "s" : ""}`;
  };

  return (
    <>
      <main className="saved-news">
        <header className="saved-news__header">
          <Navigation
            onSignIn={onSignIn}
            onLogout={onLogout}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            theme="dark"
          />
        </header>

        <section className="saved-news__hero">
          <p className="saved-news__label">Saved articles</p>
          <h1 className="saved-news__title">
            {userName}, you have {articlesCount} saved {articleWord}
          </h1>
          <p className="saved-news__keywords">
            <span className="saved-news__keywords-label">By keywords:</span>{" "}
            <span className="saved-news__keywords-value">
              {getKeywordsText()}
            </span>
          </p>
        </section>

        <section className="saved-news__cards">
          <NewsCardList
            cards={savedArticles}
            isLoggedIn={isLoggedIn}
            hasSearched={true}
            onSaveArticle={onSaveArticle}
            saveArticles={savedArticles}
            isSavedPage={true}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedNews;
