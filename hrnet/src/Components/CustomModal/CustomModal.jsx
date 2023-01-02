import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpen } from '../../Store/slices/modalSlice';
import './customModal.css';
import FocusTrap from 'focus-trap-react';

const CustomModal = () => {
  ///modal
  let modalReducer = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const globalValidity = useSelector(
    (state) => state.errorReducer.globalValidity
  );
  // function toggleModal() {
  //   dispatch(toggleOpen());
  // }

  let modalRef = useRef(null);

  function closeModal(e) {
    e.preventDefault();
    dispatch(toggleOpen());
  }

  function handleKeyDown(e) {
    if (modalReducer.open === true) {
      if (e.key === 'Escape') {
        console.log('yep');
        dispatch(toggleOpen());
      }
    }
  }

  ///customize
  let formReducer = useSelector((state) => state.formReducer);

  let modalProps = {
    modalId: 'homePage-modal',
    success: globalValidity,
  };

  return (
    <FocusTrap active={modalReducer.open}>
      <div
        className={
          modalReducer.open === true
            ? 'modal-bg modal-background-style'
            : 'hidden'
        }
        id={modalProps.modalId}
        ref={modalRef}
        tabIndex='0'
        onKeyDown={handleKeyDown}
      >
        <div className='modal-body modal-body-style'>
          {modalProps.success ? (
            <h2>
              Welcome Welcome, {formReducer.firstName} {formReducer.lastName}
            </h2>
          ) : (
            <h2>Something is missing, or incorrect...</h2>
          )}
          <p>
            {modalProps.success
              ? 'new employee created successfully'
              : 'Please make sure the form is filled in correctly'}{' '}
          </p>
          <button className='modal-btn' onClick={closeModal}>
            Close <span>&#10005;</span>
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};

export default CustomModal;
