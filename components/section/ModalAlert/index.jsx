import { useEffect } from 'react';
import style from './style.module.scss';


const ModalAlert = ({ children, onClose, classname }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className={`${style['modal-container']} ${classname}`}>
      <button className={style['close-btn']} onClick={onClose}>
        <img src='static/media/close.svg' alt='close modal' />
      </button>
      {children}
    </div>
  );
};

export default ModalAlert;
