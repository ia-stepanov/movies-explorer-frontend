import './Popup.css';

const Popup = ({ text, isOpen, onClose }) => {
  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <p className="popup__text">{text}</p>
        <button className="popup__close" type="button" onClick={onClose} />
      </div>
    </section>
  );
};

export default Popup;
