import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  title,
  children,
  onClose,
  buttonText,
  onSubmit,
  footer,
  footerClassName = "",
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__container">
          <button className="modal__close" onClick={onClose}>
            &times;
          </button>

          <h2 className="modal__title">{title}</h2>
          <form className="modal__form" onSubmit={onSubmit}>
            {children}
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
            {footer ? (
              <div className={`modal__footer ${footerClassName}`.trim()}>
                {footer}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
