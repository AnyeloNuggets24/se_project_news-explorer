import "./Main.css";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { getNews } from "../../utils/api";

function Main({ onSgnIn, isLoggedIn, currentUser }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    setHasSearched(true);
    setIsLoading(true);

    try {
      const articles = await getNews(query);
      setCards(articles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setCards([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="main">
        <Header 
          onSearch={handleSearch}
          onSgnIn={onSgnIn}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
        />

        <NewsCardList
          cards={cards}
          isLoading={isLoading}
          hasSearched={hasSearched}
        />

        <About />
      </main>
      <Footer />
    </>
  );
}

export default Main;
