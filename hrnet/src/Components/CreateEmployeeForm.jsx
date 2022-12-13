import { React, useState } from 'react';
import { setDataBase } from '../Store/slices/dataBaseSlice';
import { checkGlobalValidity } from '../Store/slices/errorSlice';

import { useDispatch, useSelector } from 'react-redux';
import FieldSet from '../Components/FieldSet';
import FirstNameForm from './firstNameForm/FirstNameForm';
import LastNameForm from './lastNameForm/LastNameForm';
import DepartmentForm from './departmentForm/DepartmentForm';
import StartDateForm from './startDateForm/StartDateForm';
import BirthDateForm from './birthDateForm/BirthDateForm';
import CustomModal from './CustomModal/CustomModal';
import FirstNameValidation from './firstNameForm/FirstNameValidation';

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formReducer);
  const globalValidity = useSelector(
    (state) => state.errorReducer.globalValidity
  );
  function saveForm() {
    dispatch(setDataBase(form));
  }
  function checkForm() {
    // dispatch(checkGlobalValidity());
    // if (globalValidity === true) {
    saveForm();
    //}
  }

  //////custom modal//////////////////////////////////////
  //declare open variable
  const [open, setOpen] = useState(false);
  //declare open/close function
  function toggleOpen() {
    setOpen(!open);
  }
  //declare open function AND additionnal action(s)
  function openModal(e) {
    e.preventDefault();
    toggleOpen();
    //add custom action(s) below
    checkForm();
  }
  //declare close function AND additionnal action(s)
  function closeModal(e) {
    e.preventDefault();
    toggleOpen();
    //add custom action(s) below
  }
  //declare modal props
  let modalProps = {
    openVariable: open,
    closeAction: closeModal,
  };
  //////END custom modal//////////////////////////////////////////
  return (
    <form action='#' id='create-employee'>
      <FirstNameForm></FirstNameForm>
      <FirstNameValidation></FirstNameValidation>
      <LastNameForm></LastNameForm>
      <BirthDateForm></BirthDateForm>
      <StartDateForm></StartDateForm>
      <FieldSet></FieldSet>
      <label htmlFor='department'>Department</label>
      <DepartmentForm></DepartmentForm>
      <button onClick={openModal}>Save</button>
      <CustomModal {...modalProps}></CustomModal>
    </form>
  );
};

export default CreateEmployeeForm;
