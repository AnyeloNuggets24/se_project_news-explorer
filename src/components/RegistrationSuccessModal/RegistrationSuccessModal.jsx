import "./RegistrationSuccessModal.css";

function RegistrationSuccessModal({ isOpen, onClose, onSignInClick }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal registration-success-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__container registration-success-modal__container">
          <button className="modal__close" onClick={onClose}>
            &times;
          </button>

          <p className="registration-success-modal__title">
            Registration successfully completed!
          </p>

          <button
            className="registration-success-modal__signin"
            type="button"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccessModal;
