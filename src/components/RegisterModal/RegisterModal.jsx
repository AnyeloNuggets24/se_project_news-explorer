import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ onClose }) {
  return (
    <ModalWithForm title="Sign up" onClose={onClose}>
    </ModalWithForm>
  );
}

export default RegisterModal;
