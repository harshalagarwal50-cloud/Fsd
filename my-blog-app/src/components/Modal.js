// src/components/Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Import the CSS for styling

function Modal({ children, onClose }) {
  // Ensure the modal-root exists, though we added it to index.html
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error("The 'modal-root' element was not found in the DOM. Please ensure public/index.html has <div id='modal-root'></div>");
    return null; // Don't render if root is missing
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    modalRoot // This is where the modal will be rendered in the DOM
  );
}

export default Modal;