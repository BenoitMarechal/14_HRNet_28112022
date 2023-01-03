import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//STATES SELECTOR
import StreetForm from '../streetForm/StreetForm';
import CityForm from '../cityForm/CityForm';
import StateForm from '../stateForm/StateForm';
import ZipCodeForm from '../zipCodeForm/ZipCodeForm';
const FieldSet = () => {
  //const dispatch = useDispatch();
  const firstTry = useSelector((state) => state.formReducer.firstTry);
  const errorReducer = useSelector((state) => state.errorReducer);
  // function setFirstTry(arg) {
  //   let target = {};
  //   target.firstTry = arg;
  //   console.log(target);
  //   dispatch(setValue(target));
  // }
  return (
    <fieldset className='address'>
      <legend>Address</legend>
      <StreetForm></StreetForm>
      {firstTry === false && errorReducer.streetError !== '' ? (
        <div className='errorMessage'> {errorReducer.streetError}</div>
      ) : (
        ''
      )}
      <CityForm></CityForm>
      {firstTry === false && errorReducer.cityError !== '' ? (
        <div className='errorMessage'> {errorReducer.cityError}</div>
      ) : (
        ''
      )}
      <label htmlFor='state'>State</label>
      <StateForm></StateForm>
      {firstTry === false && errorReducer.stateError !== '' ? (
        <div className='errorMessage'> {errorReducer.stateError}</div>
      ) : (
        ''
      )}
      <label htmlFor='zip-code'>Zip Code</label>
      <ZipCodeForm></ZipCodeForm>
      {firstTry === false && errorReducer.zipCodeError !== '' ? (
        <div className='errorMessage'> {errorReducer.zipCodeError}</div>
      ) : (
        ''
      )}
    </fieldset>
  );
};

export default FieldSet;
