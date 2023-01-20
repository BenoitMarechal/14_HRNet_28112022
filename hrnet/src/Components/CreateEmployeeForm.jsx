import { React, useState } from 'react';
import { setDataBase } from '../Store/slices/dataBaseSlice';
import {
  checkGlobalValidity,
  setError,
  resetError,
} from '../Store/slices/errorSlice';
import { useDispatch, useSelector } from 'react-redux';
import FirstNameForm from './firstNameForm/FirstNameForm';
import LastNameForm from './lastNameForm/LastNameForm';
import DepartmentForm from './DepartmentForm/DepartmentForm';
import StartDateForm from './startDateForm/StartDateForm';
import BirthDateForm from './birthDateForm/BirthDateForm';
import CustomModal from './CustomModal/CustomModal';
import { checkFormValidity } from '../service/formValidation';
import { setValue } from '../Store/slices/formSlice';
import StreetForm from './streetForm/StreetForm';
import CityForm from './CityForm/CityForm';
import StateForm from './stateForm/StateForm';
import ZipcodeForm from './zipCodeForm/ZipCodeForm';

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
  const globalValidity = useSelector(
    (state) => state.errorReducer.globalValidity
  );

  function checkForm() {
    //UPDATES EVERY Error and global validity
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
    checkForm();
    if (globalValidity === true) {
      emptyForm(); //empties the HTMLform
    }
  }

  //declare modal props
  let modalProps = {
    open: modalOpen,
    closeFunction: closeFunction,
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
          <button
            onClick={handleSubmit}
            disabled={!globalValidity && firstTry === false}
            className=' btn btn-neutral shadow-inner shadow-slate-400 w-72 col-span-2 px-6 my-4 '
          >
            Save
          </button>
        </div>
      </form>

      <CustomModal {...modalProps}></CustomModal>
    </div>
  );
};

export default CreateEmployeeForm;
