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
            <div className="cross" onClick={props.onClose}>
              &#10060;
            </div>
          </div>
        </>,
        document.getElementById('portal')!
      )}
    </>
  );
};

export default Modal;
