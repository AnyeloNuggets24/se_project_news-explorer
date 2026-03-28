import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({ isOpen, onClose, onLogin, onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value || isValidEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }

    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign in"
      onClose={onClose}
      buttonText="Sign in"
      onSubmit={handleSubmit}
      footerClassName="login-modal__footer"
      footer={
        <>
          <span className="login-modal__footer-text">or </span>
          <button
            className="login-modal__footer-link login-modal__footer-button"
            type="button"
            onClick={onSignUpClick}
          >
            Sign up
          </button>
        </>
      }
    >
      <label className="login-modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        id="login-email"
        className={`login-modal__input ${emailError ? "login-modal__input_error" : ""}`}
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError ? (
        <p className="login-modal__error" aria-live="polite">
          {emailError}
        </p>
      ) : null}
      <label className="login-modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        id="login-password"
        className="login-modal__input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </ModalWithForm>
  );
}

export default LoginModal;
