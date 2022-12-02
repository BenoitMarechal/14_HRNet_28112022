import { React, useState } from 'react';
import Select from 'react-select';
import SingleTextInput from './SingleTextInput';

let top = ['Street', 'City'];
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const FieldSet = () => {
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
        options={options}
      />
      <label htmlFor='zip-code'>Zip Code</label>
      <input type={'number'} id='zip-code'></input>
    </fieldset>
  );
};

export default FieldSet;
