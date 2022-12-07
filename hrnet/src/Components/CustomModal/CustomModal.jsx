import React from 'react';
import './customModal.css';

const CustomModal = (props) => {
  return (
    <div
      className={
        props.openVariable ? 'modal-bg modal-background-style' : 'hidden'
      }
    >
      <div className='modal-body modal-body-style'>
        <h2>Modal Title</h2>
        <p>modal message</p>
        <div className='modal-btn' onClick={props.closeAction}>
          <span>&#10005;</span>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
