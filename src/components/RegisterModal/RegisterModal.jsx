import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegisterModal({ isOpen, onClose, onRegister, onOpenSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password);
  };

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign up"
      onSubmit={handleSubmit}
      footerClassName="register-modal__footer"
      footer={
        <>
          <span className="register-modal__footer-text">or </span>
          <button
            className="register-modal__footer-button"
            type="button"
            onClick={onOpenSignIn}
          >
            Sign in
          </button>
        </>
      }
    >
      <label className="register-modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        id="register-email"
        className="register-modal__input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="register-modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        id="register-password"
        className="register-modal__input"
        type="password"
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
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
