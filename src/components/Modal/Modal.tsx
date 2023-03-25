import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const portalElement = document.getElementById('portal')!;

export type ModalProps = {
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
              <div>{this.props.children}</div>
              <button onClick={this.props.onClose}>OK</button>
            </div>
          </>,
          portalElement
        )}
      </>
    );
  }
}

export default Modal;
