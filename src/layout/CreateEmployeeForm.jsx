import { React, useState } from 'react';
import { setDataBase } from '../store/slices/dataBaseSlice';
import {
  checkGlobalValidity,
  setError,
  resetError,
} from '../store/slices/errorSlice';
import { useDispatch, useSelector } from 'react-redux';
import FirstNameForm from '../components/FirstNameForm/FirstNameForm';
import LastNameForm from '../components/LastNameForm/LastNameForm';
import DepartmentForm from '../components/DepartmentForm/DepartmentForm';
import StartDateForm from '../components/StartDateForm/StartDateForm';
import BirthDateForm from '../components/BirthDateForm/BirthDateForm';
import { checkFormValidity } from '../utils/formValidation';
import { setValue } from '../store/slices/formSlice';
import StreetForm from '../components/StreetForm/StreetForm';
import CityForm from '../components/CityForm/CityForm';
import StateForm from '../components/StateForm/StateForm';
import ZipcodeForm from '../components/ZipCodeForm/ZipCodeForm';
import { BmModal } from 'bm-react-modal';

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formReducer);
  const [formKey, setFormKey] = useState(0);

  function setFirstTry(value) {
    let target = {};
    target.firstTry = value;
    dispatch(setValue(target));
  }
  const globalValidity = useSelector(
    (state) => state.errorReducer.globalValidity
  );

  function checkForm() {
    //UPDATES EVERY Error and calculates global validity
    dispatch(resetError());
    dispatch(setError(checkFormValidity()));
    dispatch(checkGlobalValidity());
  }

  function emptyForm() {
    setFormKey(formKey + 1);
  }
  function recordForm() {
    dispatch(setDataBase(form));
  }
  //After openning, save employee if form is correct, manage first try
  function afterOpenFunction() {
    if (globalValidity === true) {
      recordForm();
      setFirstTry(true);
    } else {
      setFirstTry(false);
    }
  }
  //After closing, clear form if it is correct
  function afterCloseFunction() {
    if (globalValidity === true) {
      emptyForm(); //empties the HTMLform
    }
  }
  //declare modal props
  let modalProps = {
    afterOpenFunction: afterOpenFunction,
    afterCloseFunction: afterCloseFunction,
    btnText: 'SAVE',
    headLineText: globalValidity
      ? 'Welcome, ' + form.firstName + ' ' + form.lastName + '!'
      : 'Something is missing, or incorrect...',
    messageText: globalValidity
      ? 'New employee created successfully'
      : 'Please make sure the form is filled in correctly',
    backGroundColor: 'rgba(84, 197, 222, 0.4)',
    bodyBackGround: '#319266',
    openBtnClass:
      'btn btn-neutral w-72 shadow-inner shadow-slate-400 col-span-2 px-6 my-4',
  };

  return (
    <div className='parent text-neutral '>
      <form
        action='#'
        id='create-employee'
        onClick={checkForm}
        onFocus={checkForm}
        onChange={checkForm}
        key={formKey}
        tabIndex={0}
        className={
          ' grid grid-cols-2  px-12  w-full gap-x-12 border border-4 border-current bg-primary rounded-b-xl'
        }
      >
        <FirstNameForm></FirstNameForm>
        <StreetForm></StreetForm>
        <LastNameForm></LastNameForm>
        <CityForm></CityForm>
        <BirthDateForm></BirthDateForm>
        <StateForm></StateForm>
        <StartDateForm></StartDateForm>
        <ZipcodeForm></ZipcodeForm>
        <div className='col-span-2'>
          <DepartmentForm></DepartmentForm>
        </div>
        <div className='col-span-2 flex justify-center'>
          <BmModal {...modalProps}></BmModal>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployeeForm;
