import { React, useState } from 'react';
import { setDataBase } from '../Store/slices/dataBaseSlice';
import { useDispatch, useSelector } from 'react-redux';
import FieldSet from '../Components/FieldSet';
import FirstNameForm from './firstNameForm/FirstNameForm';
import LastNameForm from './lastNameForm/LastNameForm';
import DepartmentForm from './departmentForm/DepartmentForm';
import StartDateForm from './startDateForm/StartDateForm';
import BirthDateForm from './birthDateForm/BirthDateForm';
import CustomModal from './CustomModal/CustomModal';

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formSliceReducer);
  //////custom modal//////////////////////////////////////
  //declare open variable
  const [open, setOpen] = useState(false);
  //declare open/close function
  function toggleOpen() {
    setOpen(!open);
  }
  //declare open AND save user
  function openModal(e) {
    e.preventDefault();
    toggleOpen();
    //impossible de déclarer la fonction plus haut???
    dispatch(setDataBase(form));
  }
  //declare modal props
  let modalProps = {
    openVariable: open,
    closeAction: toggleOpen,
  };
  //////END custom modal//////////////////////////////////////////
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
      <CustomModal {...modalProps}></CustomModal>
    </form>
  );
};

export default CreateEmployeeForm;
