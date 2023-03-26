import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

class Modal extends React.Component<ModalProps> {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <>
        {ReactDOM.createPortal(
          <>
            <div className="backdrop" onClick={this.props.onClose}></div>
            <div className="modal">
              {this.props.children}
              <button onClick={this.props.onClose}>OK</button>
            </div>
          </>,
          document.getElementById('portal')!
        )}
      </>
    );
  }
}

export default Modal;
