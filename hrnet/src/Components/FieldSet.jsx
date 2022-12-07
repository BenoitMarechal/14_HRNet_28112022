import { React } from 'react';
//STATES SELECTOR
import StreetForm from './streetForm/StreetForm';
import CityForm from './cityForm/CityForm';
import StateForm from './stateForm/StateForm';
import ZipCodeForm from './zipCodeForm/ZipCodeForm';
const FieldSet = () => {
  return (
    <fieldset className='address'>
      <legend>Address</legend>
      <StreetForm></StreetForm>
      <CityForm></CityForm>
      <label htmlFor='state'>State</label>
      <StateForm></StateForm>
      {/* <Select
        id='state'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={states}
      /> */}
      <label htmlFor='zip-code'>Zip Code</label>
      <ZipCodeForm></ZipCodeForm>
    </fieldset>
  );
};

export default FieldSet;
