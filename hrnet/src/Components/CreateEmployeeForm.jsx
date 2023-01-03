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
import DepartmentForm from './departmentForm/DepartmentForm';
import StartDateForm from './startDateForm/StartDateForm';
import BirthDateForm from './birthDateForm/BirthDateForm';
import CustomModal from './CustomModal/CustomModal';
//import FirstNameValidation from './firstNameForm/FirstNameValidation';
import { checkFormValidity } from '../service/formValidation';
import { setValue } from '../Store/slices/formSlice';
import { toggleOpen } from '../Store/slices/modalSlice';
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
  const modalOpen = useSelector((state) => state.modalReducer.open);
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
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(toggleOpen());
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
  function emptyForm() {
    setFormKey(formKey + 1);
  }
  useEffect(() => {
    if (modalOpen === false && globalValidity === true) {
      //console.log('yay');
      emptyForm();
    }
  }, [modalOpen]);

  function recordForm() {
    dispatch(setDataBase(form));
  }

  //declare close function AND additionnal action(s)

  //declare modal props

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
      <div className='container-large'>
        <div className='container-small'>
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
        </div>
        {/* <div className='container-small'> */}
        <FieldSet></FieldSet>
        {/* </div> */}
      </div>

      <div className='container-large'>
        <label htmlFor='department'>Department</label>

        <DepartmentForm></DepartmentForm>

        {/* INITIAL */}
        {firstTry === false && errorReducer.departmentError !== '' ? (
          <div className='errorMessage'> {errorReducer.departmentError}</div>
        ) : (
          ''
        )}
        {/* INITIAL */}
      </div>

      <div className='container-large'>
        <button
          onClick={handleSubmit}
          disabled={!globalValidity && firstTry === false}
        >
          Save
        </button>
      </div>

      <CustomModal></CustomModal>
    </form>
  );
};

export default CreateEmployeeForm;
