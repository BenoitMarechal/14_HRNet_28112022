import { React, useState } from 'react';
import Select from 'react-select';
import SingleTextInput from './SingleTextInput';
//STATES SELECTOR
import { states } from './Assets/states';

let top = ['Street', 'City'];

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const FieldSet = () => {
  //console.log(test);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <fieldset className='address'>
      <legend>Address</legend>
      {top.map((...elt) => (
        <SingleTextInput
          {...elt}
          key={'top' + top.indexOf(...elt)}
        ></SingleTextInput>
      ))}
      <label htmlFor='state'>State</label>
      <Select
        id='state'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={states}
      />
      <label htmlFor='zip-code'>Zip Code</label>
      <input type={'number'} id='zip-code'></input>
    </fieldset>
  );
};

export default FieldSet;
