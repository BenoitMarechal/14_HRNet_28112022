import React from 'react';
import './customModal.scss';
import FocusTrap from 'focus-trap-react';

const CustomModal = (props) => {
  let modalBgStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: props.open ? 'flex' : 'none',
    background: props.backGroundColor,
  };

  let modalBodyStyle = {
    margin: 'auto',
  };

  function handleClose(e) {
    e.preventDefault();
    props.closeFunction();
  }

  function handleKeyDown(e) {
    e.preventDefault();
    if (props.open === true) {
      if (e.key === 'Escape' || e.key === 'Enter') {
        props.closeFunction();
      }
    }
  }
  return (
    <FocusTrap active={props.open}>
      <div
        className=' modal-background-style'
        tabIndex='0'
        onKeyDown={handleKeyDown}
        style={modalBgStyle}
      >
        <div
          className='modal-body bg-secondary rounded-3xl '
          style={modalBodyStyle}
        >
          {props.message}
          <button className='modal-btn' onClick={handleClose}>
            Close <span>&#10005;</span>
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};

export default CustomModal;
