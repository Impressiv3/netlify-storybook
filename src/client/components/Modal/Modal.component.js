import React, { useState } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';

export default function Modal({ text, cornerClose, btn }) {
  const [isOpen, setIsOpen] = useState(false);
  const openAndCloseModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {!isOpen && <button onClick={openAndCloseModal} label="open modal" />}
      {isOpen && (
        <div className="modal-bg">
          {cornerClose && (
            <button
              onClick={openAndCloseModal}
              type="button"
              className="closing-modal-button"
            >
              X
            </button>
          )}
          <p className="modal-text">{text}</p>
          {btn && (
            <Button
              primary="true"
              label="Button"
              onClick={() => console.log('empty')}
            ></Button>
          )}
        </div>
      )}
    </div>
  );
}

Modal.propTypes = {
  // show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  cornerClose: PropTypes.bool.isRequired,
  btn: PropTypes.bool,
};
Modal.defaultProps = {
  btn: true,
};
