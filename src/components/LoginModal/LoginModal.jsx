import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose }) {
  return <ModalWithForm title="Sign in" onClose={onClose}></ModalWithForm>;
}

export default LoginModal;
