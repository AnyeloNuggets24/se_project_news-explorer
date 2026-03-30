import "./App.css";
import Main from "../Main/Main";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRegisterSuccessOpen, setIsRegisterSuccessOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [saveArticles, setSaveArticles] = useState([]);

  const openLoginModal = () => {
    setIsRegisterOpen(false);
    setIsRegisterSuccessOpen(false);
    setIsLoginOpen(true);
  };

  const openRegisterModal = () => {
    setIsLoginOpen(false);
    setIsRegisterSuccessOpen(false);
    setIsRegisterOpen(true);
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setCurrentUser(userData);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleRegister = () => {
    setIsRegisterOpen(false);
    setIsRegisterSuccessOpen(true);
  };

  const handleSaveArticle = (article) => {
    setSaveArticles((prev) => {
      const exsist = prev.find((item) => item.id !== article.id);

      if (exsist) {
        // Remove article if it already exists
        return prev.filter((item) => item.id !== article.id);
      }
      return [article, ...prev];
    });
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main
            onSignIn={openLoginModal}
            onLogout={handleLogout}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            onSaveArticle={handleSaveArticle}
            saveArticles={saveArticles}
          />
        </Route>

        <Route path="/saved">
          {isLoggedIn ? (
            <SavedNews
              savedArticles={saveArticles}
              isLoggedIn={isLoggedIn}
              onSaveArticle={handleSaveArticle}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onOpenSignUp={openRegisterModal}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
        onOpenSignIn={openLoginModal}
      />
      <RegistrationSuccessModal
        isOpen={isRegisterSuccessOpen}
        onClose={() => setIsRegisterSuccessOpen(false)}
        onOpenSignIn={openLoginModal}
      />
    </div>
  );
}

export default App;
