import { React, useState } from 'react';
import { setDataBase } from '../Store/slices/dataBaseSlice';
import {
  checkGlobalValidity,
  setError,
  resetError,
} from '../Store/slices/errorSlice';
import { useDispatch, useSelector } from 'react-redux';
import FieldSet from '../Components/FieldSet';
import FirstNameForm from './firstNameForm/FirstNameForm';
import LastNameForm from './lastNameForm/LastNameForm';
import DepartmentForm from './departmentForm/DepartmentForm';
import StartDateForm from './startDateForm/StartDateForm';
import BirthDateForm from './birthDateForm/BirthDateForm';
import CustomModal from './CustomModal/CustomModal';
//import FirstNameValidation from './firstNameForm/FirstNameValidation';
import { checkFormValidity } from '../service/formValidation';
import { setValue } from '../Store/slices/formSlice';
//import { emptyForm } from '../service/emptyForm';

const CreateEmployeeForm = () => {
  // let formRef = useRef(null);
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formReducer);
  const [formKey, setFormKey] = useState(0);
  /////////////////////
  const firstTry = useSelector((state) => state.formReducer.firstTry);
  function setFirstTry(arg) {
    let target = {};
    target.firstTry = arg;
    console.log(target);
    dispatch(setValue(target));
  }
  //////////////////////////////////////////////////////////
  const errorReducer = useSelector((state) => state.errorReducer);
  const globalValidity = useSelector(
    (state) => state.errorReducer.globalValidity
  );

  function checkForm() {
    //UPDATES EVERY Error and global validity
    dispatch(resetError());
    dispatch(setError(checkFormValidity()));
    dispatch(checkGlobalValidity());
  }

  //declare open function AND additionnal action(s)
  function openModal(e) {
    e.preventDefault();
    toggleOpen();
    //add custom action(s) below
    //saveForm();
    if (globalValidity === true) {
      recordForm();
      emptyForm();
      setFirstTry(true);
    } else {
      setFirstTry(false);
    }
  }
  function emptyForm() {
    setFormKey(formKey + 1);
  }
  function recordForm() {
    dispatch(setDataBase(form));
  }

  // function saveForm() {
  //   if (globalValidity === true) {
  //     dispatch(setDataBase(form));
  //     setFormKey(formKey + 1);
  //   } else {
  //     console.log('nope');
  //     setFirstTry(false);
  //   }
  //   //dispatch(resetForm());
  //   // dispatch(resetError());
  // }

  //////custom modal//////////////////////////////////////
  //declare open variable
  const [open, setOpen] = useState(false);
  //declare open/close function
  function toggleOpen() {
    setOpen(!open);
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
    modalId: 'homePage-modal',
    closeAction: closeModal,
    success: globalValidity,
    firstName: form.firstName,
    lastName: form.lastName,
  };

  return (
    <form
      action='#'
      id='create-employee'
      onClick={checkForm}
      onFocus={checkForm}
      onChange={checkForm}
      //ref={formRef}
      key={formKey}
      tabIndex={0}
    >
      <FirstNameForm></FirstNameForm>

      {firstTry === false && errorReducer.firstNameError !== '' ? (
        <div className='errorMessage'> {errorReducer.firstNameError}</div>
      ) : (
        ''
      )}

      <LastNameForm></LastNameForm>
      {firstTry === false && errorReducer.laststNameError !== '' ? (
        <div className='errorMessage'> {errorReducer.lastNameError}</div>
      ) : (
        ''
      )}

      <BirthDateForm></BirthDateForm>
      {firstTry === false && errorReducer.birthDateError !== '' ? (
        <div className='errorMessage'> {errorReducer.birthDateError}</div>
      ) : (
        ''
      )}
      <StartDateForm></StartDateForm>
      {firstTry === false && errorReducer.startDateError !== '' ? (
        <div className='errorMessage'> {errorReducer.startDateError}</div>
      ) : (
        ''
      )}
      <FieldSet></FieldSet>
      <label htmlFor='department'>Department</label>
      <DepartmentForm></DepartmentForm>
      {firstTry === false && errorReducer.departmentError !== '' ? (
        <div className='errorMessage'> {errorReducer.departmentError}</div>
      ) : (
        ''
      )}

      <button
        onClick={openModal}
        disabled={!globalValidity && firstTry === false}
      >
        Save
      </button>
      <CustomModal {...modalProps}></CustomModal>
    </form>
  );
};

export default CreateEmployeeForm;
