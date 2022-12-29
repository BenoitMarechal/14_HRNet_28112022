import React from 'react';
import { useRef } from 'react';
import './customModal.css';

const CustomModal = (props) => {
  let modalRef = useRef(null);
  console.log(modalRef.current);

  function handleKeyDown(e) {
    console.log(e.key);
    if (e.key === 'Escape') {
      console.log('yep');
    }
  }

  return (
    <div
      className={
        props.openVariable ? 'modal-bg modal-background-style' : 'hidden'
      }
      id={props.modalId}
      ref={modalRef}
      tabIndex='0'
      onKeyDown={handleKeyDown}
    >
      <div className='modal-body modal-body-style'>
        {props.success ? (
          <h2>
            Welcome, {props.firstName} {props.lastName}
          </h2>
        ) : (
          <h2>Something is missing, or incorrect...</h2>
        )}
        <p>
          {props.success
            ? 'new employee created successfully'
            : 'Please make sure the form is filled in correctly'}{' '}
        </p>
        <button className='modal-btn' onClick={props.closeAction}>
          Close <span>&#10005;</span>
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
