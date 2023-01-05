import { React, useEffect, useState } from 'react';
import { setDataBase } from '../Store/slices/dataBaseSlice';
import {
  checkGlobalValidity,
  setError,
  resetError,
} from '../Store/slices/errorSlice';
import { useDispatch, useSelector } from 'react-redux';
import FieldSet from '../Components/FieldSet/FieldSet';
import FirstNameForm from './firstNameForm/FirstNameForm';
import LastNameForm from './lastNameForm/LastNameForm';
import DepartmentForm from './DepartmentForm/DepartmentForm';
import StartDateForm from './startDateForm/StartDateForm';
import BirthDateForm from './birthDateForm/BirthDateForm';
import CustomModal from './CustomModal/CustomModal';
//import FirstNameValidation from './firstNameForm/FirstNameValidation';
import { checkFormValidity } from '../service/formValidation';
import { setValue, resetForm } from '../Store/slices/formSlice';
// import { toggleOpen } from '../Store/slices/modalSlice';
//import { emptyForm } from '../service/emptyForm';

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formReducer);
  const [formKey, setFormKey] = useState(0);
  /////////////////////
  const firstTry = useSelector((state) => state.formReducer.firstTry);
  function setFirstTry(arg) {
    let target = {};
    target.firstTry = arg;
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

  function emptyForm() {
    setFormKey(formKey + 1);
  }

  function recordForm() {
    dispatch(setDataBase(form));
  }

  //declare openning parameter
  const [modalOpen, setModalOpen] = useState(false);
  //declare modal toggle function
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  //declare modal openning function
  function handleSubmit(e) {
    e.preventDefault();
    toggleModal();
    //add custom action(s) below
    //saveForm();
    if (globalValidity === true) {
      recordForm();
      //emptyForm();
      setFirstTry(true);
    } else {
      setFirstTry(false);
    }
  }

  //declare modal closing function
  function closeFunction() {
    toggleModal();
    if (globalValidity === true) {
      emptyForm(); //empties the HTMLform
    }
  }

  //declare modal props
  let modalProps = {
    open: modalOpen,
    closeFunction: closeFunction,
    //toggleFunction: toggleModal,
    message: globalValidity ? (
      <div>
        <h2>
          Welcome, {form.firstName} {form.lastName}
        </h2>
        <p>New employee created successfully</p>
      </div>
    ) : (
      <div>
        <h2>Something is missing, or incorrect...</h2>
        <p>Please make sure the form is filled in correctly</p>
      </div>
    ),
    backGroundColor: 'rgba(84, 197, 222, 0.4)',
  };

  return (
    <form
      action='#'
      id='create-employee'
      onClick={checkForm}
      onFocus={checkForm}
      onChange={checkForm}
      key={formKey}
      tabIndex={0}
    >
      <div className='container-large'>
        <div className='container-small'>
          <FirstNameForm></FirstNameForm>

          {/* {firstTry === false && errorReducer.firstNameError !== '' ? (
            <div className='errorMessage'> {errorReducer.firstNameError}</div>
          ) : (
            ''
          )} */}

          <LastNameForm></LastNameForm>
          {/* {firstTry === false && errorReducer.laststNameError !== '' ? (
            <div className='errorMessage'> {errorReducer.lastNameError}</div>
          ) : (
            ''
          )} */}

          <BirthDateForm></BirthDateForm>
          {/* {firstTry === false && errorReducer.birthDateError !== '' ? (
            <div className='errorMessage'> {errorReducer.birthDateError}</div>
          ) : (
            ''
          )} */}
          <StartDateForm></StartDateForm>
          {/* {firstTry === false && errorReducer.startDateError !== '' ? (
            <div className='errorMessage'> {errorReducer.startDateError}</div>
          ) : (
            ''
          )} */}
        </div>
        {/* <div className='container-small'> */}
        <FieldSet></FieldSet>
        {/* </div> */}
      </div>

      <div className='container-large'>
        {/* <label htmlFor='department'>Department</label> */}

        <DepartmentForm></DepartmentForm>

        {/* INITIAL */}
        {/* {firstTry === false && errorReducer.departmentError !== '' ? (
          <div className='errorMessage'> {errorReducer.departmentError}</div>
        ) : (
          ''
        )} */}
        {/* INITIAL */}
      </div>

      <div className='container-large'>
        <button
          onClick={handleSubmit}
          disabled={!globalValidity && firstTry === false}
          className='btn btn-neutral w-72'
        >
          Save
        </button>
      </div>

      <CustomModal {...modalProps}></CustomModal>
    </form>
  );
};

export default CreateEmployeeForm;
