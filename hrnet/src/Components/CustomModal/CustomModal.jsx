import React from 'react';
// import { useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleOpen } from '../../Store/slices/modalSlice';
// import './customModal.scss';
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
        // className={
        //   props.open === true ? 'modal-bg modal-background-style' : 'hidden'
        // }
        tabIndex='0'
        onKeyDown={handleKeyDown}
        // style={props.open ? { display: 'flex' } : { display: 'none' } modalBgStyle  }
        style={modalBgStyle}
      >
        <div className='modal-body modal-body-style' style={modalBodyStyle}>
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
