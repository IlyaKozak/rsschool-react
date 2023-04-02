import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="backdrop" onClick={props.onClose}></div>
          <div className="modal">
            {props.children}
            <button onClick={props.onClose}>OK</button>
          </div>
        </>,
        document.getElementById('portal')!
      )}
    </>
  );
};

export default Modal;
