import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegisterModal({ isOpen, onClose, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value || isValidEmail(value)) {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("This email is not available.");
      return;
    }

    onRegister(name, email, password);
  };

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign up"
      onSubmit={handleSubmit}
    >
      <label className="register-modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        id="register-email"
        className={`register-modal__input ${emailError ? "register-modal__input_error" : ""}`}
        type="email"
        name="email"
        autoComplete="email"
        inputMode="email"
        enterKeyHint="next"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        autoFocus
        required
      />
      <label className="register-modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        id="register-password"
        className="register-modal__input"
        type="password"
        name="password"
        autoComplete="new-password"
        enterKeyHint="next"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label className="register-modal__label" htmlFor="register-name">
        Username
      </label>
      <input
        id="register-name"
        className="register-modal__input"
        type="text"
        name="name"
        autoComplete="name"
        enterKeyHint="done"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {emailError ? (
        <p className="register-modal__error">{emailError}</p>
      ) : null}
    </ModalWithForm>
  );
}

export default RegisterModal;
