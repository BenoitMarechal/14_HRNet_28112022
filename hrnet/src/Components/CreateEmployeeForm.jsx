import { React, useState } from 'react';
import { setDataBase } from '../Store/slices/dataBaseSlice';
import { useDispatch, useSelector } from 'react-redux';

import FieldSet from '../Components/FieldSet';
import Modal from 'react-modal';
//DEPT SELECT
import FirstNameForm from './firstNameForm/FirstNameForm';
import LastNameForm from './lastNameForm/LastNameForm';
import DepartmentForm from './departmentForm/DepartmentForm';
import StartDateForm from './startDateForm/StartDateForm';
import BirthDateForm from './birthDateForm/BirthDateForm';

// MODAL
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formSliceReducer);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
    dispatch(setDataBase(form));
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <form action='#' id='create-employee'>
      <FirstNameForm></FirstNameForm>
      <LastNameForm></LastNameForm>
      <BirthDateForm></BirthDateForm>
      <StartDateForm></StartDateForm>
      <FieldSet></FieldSet>
      <label htmlFor='department'>Department</label>
      <DepartmentForm></DepartmentForm>
      <button onClick={openModal}>Save</button>
      {/* MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Employee creation modal'
      >
        <div className='modal'>
          <button onClick={closeModal}>X</button>
          <div>Employee Created!</div>
        </div>
      </Modal>
    </form>
  );
};

export default CreateEmployeeForm;
