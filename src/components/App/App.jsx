import "./App.css";
import Main from "../Main/Main";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRegisterSuccessOpen, setIsRegisterSuccessOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main
            onSignIn={openLoginModal}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            onLogout={handleLogout}
          />
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
