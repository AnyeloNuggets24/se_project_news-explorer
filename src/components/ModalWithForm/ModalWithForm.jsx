import './ModalWithForm.css';

function ModalWithForm({ title, children, onClose }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        {children}
        <button className="modal__close" type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default ModalWithForm;
