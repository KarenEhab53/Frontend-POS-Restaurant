import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="styles.overlay">
      <div className="styles.modal">
        <button onClick={onClose}>X</button>

        {children}
      </div>
    </div>
  );
};

export default Modal;