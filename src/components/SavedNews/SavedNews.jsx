import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ savedArticles, isLoggedIn }) {
  return (
    <main className="saved-news">
      <h2 className="saved-news__title">Saved Articles</h2>

      <NewsCardList
        cards={savedArticles}
        isLoggedIn={isLoggedIn}
        hasSearched={true}
      />
    </main>
  );
}

export default SavedNews;
