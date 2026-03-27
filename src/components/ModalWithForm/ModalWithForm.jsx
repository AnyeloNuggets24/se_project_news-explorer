import './ModalWithForm.css';

function ModalWithForm({isOpen, title, children, onClose, buttonText }) {
if (!isOpen) {
  return null;
}

  return (
    <div className="modal-overlay" onClick={onClose}></div>
    <div className="modal" onClick=>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        {children}
        <button className="modal__close" type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default ModalWithForm;
